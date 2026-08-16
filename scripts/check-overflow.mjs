/* 全スライドをブラウザで実際に開いて、はみ出しを機械的に見つける。
 *
 *   npm run check          … 判定だけ。はみ出しがあれば exit 1
 *   npm run shots          … 併せて shots/ に PNG を保存する
 *   npm run check -- 12    … 12ページ目だけ
 *
 * Slidev は枠に収まらない中身を黙ってスクロール要素にする。プレゼンでは
 * 誰もスクロールしないので、それは「消えている」のと同じ。目視は取りこぼす
 * ので、スライドの枠と中身の実寸を比べて機械的に落とす。
 *
 * 判定は2つ:
 *   1. 中身の下端 / 右端が、スライドの枠を超えている
 *   2. スクロールできてしまう要素がある (scrollHeight > clientHeight)
 *
 * Playwright ではなく puppeteer-core + システムの google-chrome を使う。
 * ブラウザを毎回ダウンロードさせないため。
 */
import { spawn } from "node:child_process";
import { mkdir, rm } from "node:fs/promises";
import puppeteer from "puppeteer-core";

const CHROME = process.env.CHROME_PATH || "/usr/bin/google-chrome";
const PORT = Number(process.env.SLIDEV_PORT || 3031);
const BASE = `http://localhost:${PORT}`;
const SHOTS = new URL("../shots/", import.meta.url).pathname;

const args = process.argv.slice(2);
const save = args.includes("--save");
const only = args.find((a) => /^\d+$/.test(a));

/** 既に誰かが立てていればそれを使い、なければ自分で立てて後で畳む。 */
async function ensureServer() {
  if (await alive()) return null;
  // npx ではなく node_modules/.bin を直に叩く。srgpu 側は pnpm で入れていて
  // npm/npx が無いため、npx に頼ると「node はあるのに動かない」になる
  const root = new URL("..", import.meta.url).pathname;
  const bin = `${root}node_modules/.bin/slidev`;
  const proc = spawn(bin, ["--port", String(PORT)], { cwd: root, stdio: "ignore" });
  for (let i = 0; i < 120; i++) {
    await new Promise((r) => setTimeout(r, 500));
    if (await alive()) return proc;
  }
  proc.kill();
  throw new Error(`slidev が ${PORT} で立ち上がらなかった`);
}

async function alive() {
  try {
    return (await fetch(BASE, { signal: AbortSignal.timeout(1000) })).ok;
  } catch {
    return false;
  }
}

/** 総ページ数。Slidev が window.__slidev__ に出している。 */
async function slideCount(page) {
  await open(page, 1);
  const n = await page.evaluate(() => {
    const t = window.__slidev__?.nav?.total;
    return typeof t === "object" ? t.value : t;
  });
  if (!Number.isFinite(n) || n < 1) throw new Error(`総ページ数が読めない (${n})`);
  return n;
}

/* Vite の HMR が WebSocket を張りっぱなしにするので networkidle は使えない。
   DOM が出たところで止めて、フォント適用とレイアウト確定を明示的に待つ。 */
async function open(page, n) {
  await page.goto(`${BASE}/${n}`, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector(".slidev-page", { timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 350));
}

/** スライドの枠と、その中身の実寸を比べる。ブラウザ側で走る。 */
function measure() {
  const root =
    document.querySelector("#slide-content .slidev-page") ||
    document.querySelector(".slidev-page") ||
    document.querySelector("#slide-content");
  if (!root) return { error: "スライドの枠が見つからない" };

  const box = root.getBoundingClientRect();
  const TOL = 2; // サブピクセルの丸め
  let maxBottom = 0;
  let maxRight = 0;
  const scrollers = [];

  for (const el of root.querySelectorAll("*")) {
    const s = getComputedStyle(el);
    if (s.display === "none" || s.visibility === "hidden" || s.position === "fixed") continue;
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) continue;
    maxBottom = Math.max(maxBottom, r.bottom);
    maxRight = Math.max(maxRight, r.right);

    // 自分でスクロールを抱えている要素 = 中身が隠れている
    const scrollableY = el.scrollHeight - el.clientHeight > TOL;
    const scrollableX = el.scrollWidth - el.clientWidth > TOL;
    if ((scrollableY || scrollableX) && /auto|scroll/.test(s.overflowY + s.overflowX)) {
      scrollers.push({
        tag: el.tagName.toLowerCase(),
        cls: (el.className || "").toString().slice(0, 60),
        over: Math.round(
          Math.max(el.scrollHeight - el.clientHeight, el.scrollWidth - el.clientWidth),
        ),
      });
    }
  }

  return {
    overflowY: Math.round(maxBottom - box.bottom),
    overflowX: Math.round(maxRight - box.right),
    scrollers: scrollers.slice(0, 5),
  };
}

const server = await ensureServer();
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox", "--force-device-scale-factor=1", "--font-render-hinting=none"],
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 1.5 });

  const total = only ? Number(only) : await slideCount(page);
  const targets = only ? [Number(only)] : Array.from({ length: total }, (_, i) => i + 1);
  if (save) {
    await rm(SHOTS, { recursive: true, force: true });
    await mkdir(SHOTS, { recursive: true });
  }

  const bad = [];
  for (const n of targets) {
    await open(page, n);
    const m = await page.evaluate(measure);
    if (save) {
      await page.screenshot({ path: `${SHOTS}${String(n).padStart(2, "0")}.png` });
    }
    if (m.error) {
      bad.push(`  p${n}: ${m.error}`);
      continue;
    }
    const issues = [];
    if (m.overflowY > 2) issues.push(`下に ${m.overflowY}px はみ出し`);
    if (m.overflowX > 2) issues.push(`右に ${m.overflowX}px はみ出し`);
    for (const s of m.scrollers) issues.push(`<${s.tag} class="${s.cls}"> が ${s.over}px スクロール`);
    if (issues.length) bad.push(`  p${n}: ${issues.join(" / ")}`);
    process.stdout.write(issues.length ? "x" : ".");
  }
  process.stdout.write("\n");

  if (bad.length) {
    console.error(`\nはみ出し ${bad.length} 件 / 全 ${targets.length} ページ\n${bad.join("\n")}`);
    console.error(`\n中身を減らして直すこと。文字を小さくして詰めるのは読めなくなるだけ。`);
    if (save) console.error(`スクリーンショット: ${SHOTS}`);
    process.exitCode = 1;
  } else {
    console.log(`全 ${targets.length} ページ、はみ出しなし。`);
    if (save) console.log(`スクリーンショット: ${SHOTS}`);
  }
} finally {
  await browser.close();
  if (server) server.kill();
}
