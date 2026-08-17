# workshop-slide

未来構想キャンプ2026 フレイル班の**オンボーディング用スライド**（Slidev / 全50ページ）。

高校生に、初日の午後までに「自分が何を作るのか」と「どう始めるのか」を渡すための資料です。
作る対象そのもの（体験システム）は別リポジトリ `~/latentlink` にあり、**このリポジトリはスライドだけ**です。

スライドを書き換えるときの決まりごとは [CLAUDE.md](CLAUDE.md) にまとめてあります。

---

## 必要なもの

| | |
|---|---|
| Node.js | v22 以上（動作確認は v22.22.0） |
| pnpm | v10 以上（動作確認は v10.33.0） |
| Google Chrome | **システムに入っているものを使う**。ブラウザは一切ダウンロードしない |

`npm` でも同じように動きます（バージョンの正本は `package-lock.json`）。
pnpm を使う場合は `pnpm-lock.yaml` が作られますが、これは **git 管理外**です。
両方を追跡すると片方だけ更新されて静かにズレるため、意図的にそうしています。

### Chrome の場所を教える

はみ出し検査と PDF 書き出しは、既定で `/usr/bin/google-chrome` を見ます。
Linux 以外や別の場所に入れている場合は `CHROME_PATH` で渡してください。

```bash
# macOS
export CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
```

---

## pnpm での手順

### 1. インストール

```bash
PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 pnpm install
```

`playwright-chromium` の postinstall は「バンドル版ブラウザを落とす」処理です。
システムの Chrome を使うので走らせません（会場の回線に依存させないため）。

インストール時に次の警告が出ますが、**これは想定どおり**です。無視して構いません。

```
Ignored build scripts: playwright-chromium@1.62.1.
Run "pnpm approve-builds" to pick which dependencies should be allowed to run scripts.
```

`pnpm approve-builds` は**実行しないでください**。承認するとブラウザのダウンロードが始まります。

なお pnpm 11 は「ビルドスクリプトを飛ばした」だけでエラー終了するため、
[.npmrc](.npmrc) に `strict-dep-builds=false` を置いて警告どまりにしています
（npm と pnpm 10 はこのキーを知らないので黙って無視します）。

### 2. 書きながら見る

```bash
pnpm dev              # ブラウザが開く
pnpm serve            # ポート 3030 で立てるだけ（開かない）
```

`/overview` を開くと全ページを一覧できます。

### 3. はみ出し検査（**書いたら必ず**）

```bash
pnpm check            # 全ページを Chrome で開いて、はみ出しを機械的に検出
pnpm shots            # 併せて shots/ に PNG を保存する
pnpm check 12         # 12ページ目だけ
```

Slidev は枠に収まらない中身を黙ってスクロール要素にします。
Markdown を見ただけでは気づけず、プレゼン中に誰もスクロールしないので、
はみ出した部分は**本番で消えているのと同じ**です。

はみ出しがあると exit 1 で落ち、該当ページと超過ピクセル数が出ます。
直し方は「中身を減らす」の一択です。**文字を小さくして詰めるのは禁止**（読めなくなるだけ）。
詳しくは [CLAUDE.md](CLAUDE.md) を参照してください。

数値で通っても、**レイアウトを変えたら `pnpm shots` の PNG を目で見ること。**
「収まってはいるが読めない」「要素が重なっている」は実寸検査では落ちません。

サーバが立っていなければ検査スクリプトが自分で立てて、終わったら畳みます。
既に `pnpm dev` が動いていればそれを使います。ポートを変えたいときは `SLIDEV_PORT` で渡します。

### 4. PDF に書き出す

```bash
pnpm export           # slides-export.pdf（50ページ, 16:9, テキストは選択できる）
pnpm export:png       # 1枚ずつ PNG が要るとき（slides-export/ に出る）
```

**PDF は git に入れません。** `slides.md` から作り直せるので、配るときだけ書き出してください。

### 5. 静的サイトとして固める

```bash
pnpm build            # dist/ に出力
```

---

## 公開先

**https://t2ky.github.io/workshop-slide/**

`main` に push すると [GitHub Actions](.github/workflows/deploy.yml) がビルドして
GitHub Pages に出します。**手で公開する操作は要りません。**

- 依存の取得は CI では `npm ci` です。`pnpm-lock.yaml` は git 管理外で CI から
  見えないため、追跡している `package-lock.json` を正本にしています
- Pages はリポジトリ名のサブパスに出るので、CI では `--base /workshop-slide/`
  を付けてビルドしています。ローカルの `pnpm build` には不要です
- 公開ページでも `/overview` や発表者モードはそのまま使えます

失敗したときは Actions のログを見てください。

```bash
gh run list --workflow deploy.yml
gh run watch
```

### 大きく書き換えたあと

Slidev の HMR は**ページ枚数が大きく変わる書き換えに追従しきれません。**
古い中身が途中のページに残ったまま、ページ数だけ新しい、という状態になります。
`pnpm check` は通ってしまうので気づけません。

表示がおかしいと思ったら、開発サーバを畳んでから確認してください。

```bash
pkill -f "[s]lidev"                    # 自分のシェルを巻き込まないよう [] で囲む
rm -rf node_modules/.vite .slidev
pnpm shots
```

ページ番号と中身がずれていないかは、`/overview` か `shots/` の連番で確かめます。

---

## npm を使う場合

コマンドは `pnpm` を `npm run` に読み替えるだけです。
ページ指定だけ `--` が要ります（pnpm では不要ですが、付けても動きます）。

```bash
PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm install
npm run check -- 12
```

---

## 構成

```
workshop-slide/
├── slides.md                  本体。章ごとに `layout: section` の扉を挟む
├── style.css                  全スライド共通の見た目
│                              .punch / .note / .chip / .hero / .stat / .cite / .screen
├── public/cite/               引用した図。外部URLではなくここから読む
├── scripts/check-overflow.mjs はみ出し検査（puppeteer-core + システムの Chrome）
├── .npmrc                     pnpm にビルドスクリプト省略を許す
└── shots/                     `pnpm shots` の出力（git 管理外）
```

---

## ネットワークに依存させない

会場の回線が読めないので、外から取ってくるものを持ちません。

- **フォント**: Slidev の `fonts:` ヘッダは Google Fonts を取りに行くので**使いません**。
  OS の `Noto Sans CJK JP` を `style.css` で直接指定しています
- **ブラウザ**: Playwright のバンドル版ではなく、システムの `google-chrome` を
  `puppeteer-core` から叩いています
- **画像**: 引用図は `public/cite/` に置いてローカルから読みます

---

## 元ネタの場所

スライドの内容は、次の3つと食い違わせないこと。**迷ったらこちらが正本です。**

| | |
|---|---|
| `~/latentlink/exercises/README.md` | 高校生が守る約束事。**部位の表と `done()` の仕様はここが正本** |
| `~/latentlink/exercises/sample/index.html` | 見本ページ。スライドのコード例はここから引く |
| `~/latentlink/README.md` | 体験全体の設計と、そう決めた理由 |

配布された3日間のスケジュール表とも突き合わせてください。
スライドに書いた時刻がスケジュール表とずれていると、当日そこで止まります。
