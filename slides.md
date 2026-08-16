---
theme: default
title: 未来の自分と話す — オンボーディング
info: 未来構想キャンプ2026 フレイル班 / latentlink 予防体験ページの作り方
lang: ja
class: text-left
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 未来の自分と話す

## フレイル予防の体験を、3日でひとつ作る

<div class="note mt-12">
未来構想キャンプ2026 &nbsp;/&nbsp; フレイル班 &nbsp;/&nbsp; 8月17日 – 19日<br>
慶應義塾大学 政策・メディア研究科 &nbsp;小橋 龍人
</div>

<!--
まず「何のためにやるのか」から入る。手を動かすのは午後から。
-->

---
layout: section
class: section
---

# 1. フレイルとは何か

<div class="note mt-4">まず、これから3日間ずっと向き合う相手を知る</div>

---

# 健康と要介護の「あいだ」

<img src="/cite/frailty-continuum.png" class="mt-4" style="width:100%;">

<div class="cite">
図：葛谷雅文, 日本老年医学会雑誌 (2009) をもとに改変 /
厚生労働省保険局高齢者医療課「高齢者の特性を踏まえた保健事業ガイドライン」(平成30年4月) 図表Ⅰ-1 より引用
</div>

<!--
左が健康、右が要介護。その間にある帯がフレイル。
加齢とともに「予備能力」が減っていく、というのがこの図の縦軸。
-->

---

# 大事なのは、矢印が両向きなこと

<div class="mt-6">

さっきの図で、健康 ⇄ フレイル の矢印は**両方向**に描かれていた。
フレイルは「衰えて終わり」ではなく、**手を打てば健康側に戻れる**状態を指す。

</div>

<div class="punch mt-8">
戻れる。だから「予防」に意味がある。
</div>

<div class="mt-8 note">

日本老年医学会が2014年に “frailty” の訳語として「虚弱」ではなく
**「フレイル」**を選んだのも、戻れることを強調したかったから。

</div>

<div class="cite mt-6">
出典：日本老年医学会「フレイルに関する日本老年医学会からのステートメント」(2014年5月) /
『フレイル診療ガイド2018年版』日本老年医学会・国立長寿医療研究センター
</div>

---

# 判定は、意外と身近な5項目

<div class="grid grid-cols-5 gap-3 mt-10 text-center">
<div class="box">体重が<br>減った</div>
<div class="box">疲れ<br>やすい</div>
<div class="box">activity<br>が減った</div>
<div class="box">握力が<br>落ちた</div>
<div class="box">歩くのが<br>遅くなった</div>
</div>

<div class="mt-10">

**3つ以上あてはまる → フレイル**　／　1〜2つ → プレフレイル（その手前）

</div>

<div class="cite mt-8">
出典：CHS (Cardiovascular Health Study) 基準。
厚生労働省「高齢者の特性を踏まえた保健事業ガイドライン」(平成30年4月) 脚注11 より
</div>

<!--
「activity が減った」は活動性低下。日本語だと硬いので言い換えている。
高校生に「おじいちゃんおばあちゃん、思い当たる?」と聞いてもいい。
-->

---

# ところが、予防には人が来ない

<div class="grid grid-cols-2 gap-12 mt-8">
<div>

<div class="hero">66.0%</div>
<div class="hero-sub">介護予防の教室に<br>「参加したいと思わない」</div>

</div>
<div class="pt-4">

<div class="note">参加しない理由の1位</div>
<div class="stat mt-2">54.5%</div>
<div class="font-bold mt-1">「今のところ自分には必要ないと思う」</div>

<div class="mt-8 note">
フレイルという言葉を知っている人自体、およそ2割にとどまるという調査もある。
</div>

</div>
</div>

<div class="cite mt-8">
出典：株式会社ルネサンス 調査 (2026年2月27日 / 65歳以上・要介護認定を受けていない地域住民 500名)
</div>

---

# ここが、本当の課題

<div class="punch mt-10">
効く方法はもう分かっている。<br>
届いていないのは「自分ごとだ」という実感の方。
</div>

<div class="mt-12 note">

体操そのものを新しく発明する必要はない。<br>
**やってみたくなる入口**を作るのが、この3日間の仕事。

</div>

<!--
ここが体験システムの出発点。次の章で「じゃあ何を作ったか」に入る。
-->

---
layout: section
class: section
---

# 2. わたしの研究の話

<div class="note mt-4">なぜこの体験システムを作っているのか</div>

---

# 自己紹介

<div class="grid grid-cols-2 gap-12 mt-8">
<div>

## 小橋 龍人

<div class="mt-4">

慶應義塾大学 政策・メディア研究科　修士2年<br>
高汐研究室 &nbsp;<span class="chip">Sociable Robots Lab</span>

</div>

<div class="note mt-6">
t2@keio.jp
</div>

</div>
<div>

やっていること

- **人の隣で動く AI エージェント**を作る
- 姿・声・表情・動きを、**その場で**生成する
- 動かすのは研究室のマシン1台。<br>クラウドに頼らない

</div>
</div>

<div class="note mt-10">
この体験システムは、研究の実証の場でもある。みんなが触るのは、その一部。
</div>

---

# 修士研究：同じ計算を、何度もしない

<div class="mt-4 note">
音声・表情・動作の同時生成における重複エンコーダの線形統合による計算資源削減
</div>

<div class="grid grid-cols-2 gap-10 mt-6">
<div>

**いまのやり方**

<div class="grid gap-2 mt-3 items-center" style="grid-template-columns:auto auto 1fr">
<div class="box box-dim">テキスト</div>
<div class="arrow">⇉</div>
<div>
<div class="box">エンコーダA → 音声</div>
<div class="box mt-1">エンコーダB → 表情</div>
<div class="box mt-1">エンコーダC → 動作</div>
</div>
</div>

<div class="note mt-3">同じ入力を3回、別々に読み込んでいる</div>

</div>
<div>

**提案**

<div class="grid gap-2 mt-3 items-center" style="grid-template-columns:auto auto 1fr">
<div class="box box-dim">テキスト</div>
<div class="arrow">→</div>
<div>
<div class="box">統一エンコーダ</div>
<div class="note mt-2" style="text-align:center">↓ 変換層でズレを補正</div>
<div class="box mt-1">音声・表情・動作</div>
</div>
</div>

<div class="note mt-3">読み込みは1回。エンコーダ2個分を削減</div>

</div>
</div>

<div class="cite mt-6">
修士中間発表 (2026年7月30日) / ICASSP 2027 投稿予定
</div>

<!--
高校生向けの言い換え: 3人の翻訳者がそれぞれ同じ本を最初から読んでいる。
1人が読んで、要約を3人に配れば済む。それをモデルの内部表現でやる話。
-->

---

# 目指しているもの

<div class="punch mt-8">
AI エージェントが、目の前の1台で、<br>人の隣に立てるようにする。
</div>

<div class="grid grid-cols-3 gap-6 mt-12 text-center">
<div>
<div class="text-4xl">⚡</div>
<div class="font-bold mt-3">軽く</div>
<div class="note mt-2">大きな設備が要らない</div>
</div>
<div>
<div class="text-4xl">🏃</div>
<div class="font-bold mt-3">速く</div>
<div class="note mt-2">待たされたら会話にならない</div>
</div>
<div>
<div class="text-4xl">🏛</div>
<div class="font-bold mt-3">現場に出せる</div>
<div class="note mt-2">公民館や市役所の待合に置ける</div>
</div>
</div>

<div class="note mt-10">
フレイル予防は、この3つが全部要る題材。だから実証先に選んでいる。
</div>

---
layout: section
class: section
---

# 3. 作ったもの

<div class="note mt-4">latentlink — 未来の自分と話す</div>

---

# コンセプト

<div class="punch mt-8">
40年後の自分が、自分の顔と自分の声で、目の前に現れて喋る。
</div>

<div class="mt-10">

グラフでも、パンフレットでもなく、**自分の顔**で見せる。
「このままいくとこうなる」を他人事にできなくするのが狙い。

そのうえで対策をやってもらい、**やった結果を同じ顔に返す**。
効果が数字ではなく、見た目で分かる。

</div>

<div class="cite mt-8">
想定設置場所：公民館・市役所の待合など、フレイル対策に意欲がない方も通りかかる場所
</div>

---

# ① 年齢を選ぶ

<div class="grid grid-cols-2 gap-12 mt-6">
<div class="screen">
<div class="cap">いまの年齢は？</div>
<div class="flex gap-2 mt-2">
<div class="box">20代</div>
<div class="box">30代</div>
<div class="box">40代</div>
</div>
<div class="flex gap-2">
<div class="box">50代</div>
<div class="box">60代</div>
</div>
</div>
<div class="pt-6">

1タップだけ。**ここで何歳ぶん老けさせるかが決まる。**

<div class="note mt-6">
入口は軽くしてある。名前も連絡先も聞かない。
通りかかった人が足を止めてくれるかどうかが、この画面の全て。
</div>

</div>
</div>

<div class="cite mt-4">※ 画面は模式図。<!-- TODO: 実機のスクリーンショットに差し替える --></div>

---

# ② 顔を撮る

<div class="grid grid-cols-2 gap-12 mt-6">
<div class="screen">
<div class="text-5xl">📷</div>
<div class="cap mt-2">正面を向いてください</div>
<div class="note">854 × 480</div>
</div>
<div class="pt-6">

カメラで正面の顔を**1枚**だけ。

<div class="mt-6">

この1枚から後の全部が作られる。<br>
喋る顔も、老けた顔も、元はこれ。

</div>

<div class="note mt-6">
明るさと正面性で品質が決まる。当日の照明は地味に重要。
</div>

</div>
</div>

<div class="cite mt-4">※ 画面は模式図。<!-- TODO: 実機のスクリーンショットに差し替える --></div>

---

# ③ 合言葉を伝える

<div class="grid grid-cols-2 gap-12 mt-6">
<div class="screen">
<div class="cap">未来の自分に、<br>昔話のはじまりを聞かせてください</div>
<div class="note mt-3">「むかしむかし、あるところに、<br>おじいさんとおばあさんが住んでいました。」</div>
<div class="box mt-3">🎙 録音する</div>
</div>
<div class="pt-2">

**この画面は3つの仕事を同時にしている。**

- 声を録る（未来の自分の声の材料になる）
- 何と言ったかが**分かっている**ので、聞き取りを挟まずに済む
- その裏で、顔を老けさせる処理が走っている

</div>
</div>

<div class="cite mt-3">※ 画面は模式図。<!-- TODO: 実機のスクリーンショットに差し替える --></div>

<!--
ここは設計として一番面白いところ。演出に見せかけて、待ち時間の隠蔽と
キャリブレーションを兼ねている。「読み上げて」ではなく「話しかけて」に
しているのは、棒読みで録ると未来の自分も棒読みになるから。
-->

---

# ④ 未来の自分と話す

<div class="grid grid-cols-2 gap-12 mt-6">
<div class="screen">
<div class="text-5xl">👴</div>
<div class="cap mt-2">40年後のあなた</div>
<div class="box mt-2">🎙 話しかける</div>
</div>
<div class="pt-6">

自分の声のまま、40年ぶん年をとった声で答えてくる。

<div class="mt-6">

話す内容は毎回変わる。台本ではなく、その場で考えている。

</div>

<div class="note mt-6">
ここまでで来場者は「自分の未来」を一度見ている。
このあとに対策を出すから効く。
</div>

</div>
</div>

<div class="cite mt-4">※ 画面は模式図。<!-- TODO: 実機のスクリーンショットに差し替える --></div>

---

# ⑤ 「対策する」→ みんなが作るところ

<div class="grid grid-cols-3 gap-6 mt-8 items-center">
<div class="screen">
<div class="cap">未来の自分</div>
<div class="box mt-2">対策する →</div>
</div>
<div class="screen" style="border-style:dashed; border-width:3px">
<div class="cap">👉 あなたのページ</div>
<div class="note mt-2">体操を1つ<br>やってもらう</div>
</div>
<div class="screen">
<div class="cap">効果が返る</div>
<div class="note mt-2">顔つきが<br>変わって戻る</div>
</div>
</div>

<div class="punch mt-10">
真ん中の1枚が、みんなの担当。
</div>

---

# ⑥ 効果を見る

<div class="grid grid-cols-2 gap-12 mt-6">
<div class="screen">
<div class="flex gap-4">
<div><div class="text-4xl">😔</div><div class="note">対策前</div></div>
<div class="arrow">→</div>
<div><div class="text-4xl">🙂</div><div class="note">対策後</div></div>
</div>
<div class="note mt-3">口角が上がり、よく動くようになった</div>
</div>
<div class="pt-6">

同じ顔で、**対策前と対策後**を並べて見せる。

<div class="mt-6">

体操をどれだけやったかで、変化の大きさが決まる。<br>
やりきれば大きく、途中までなら少しだけ変わる。

</div>

<div class="note mt-6">
「やった意味があった」が見えることが、次につながる。
</div>

</div>
</div>

<div class="cite mt-4">※ 画面は模式図。<!-- TODO: 実機のスクリーンショットに差し替える --></div>

---

# 中で動いているもの

<div class="grid gap-2 mt-8 text-center items-center"
     style="grid-template-columns:1fr auto 1fr auto 1fr auto 1fr">
<div class="box">🎧<br>聞き取り<br><span class="note">Whisper</span></div>
<div class="arrow">→</div>
<div class="box">🧠<br>返事を考える<br><span class="note">Claude</span></div>
<div class="arrow">→</div>
<div class="box">🔊<br>声を作る<br><span class="note">VoxCPM2</span></div>
<div class="arrow">→</div>
<div class="box">🎬<br>顔を喋らせる<br><span class="note">Ditto</span></div>
</div>

<div class="text-center mt-4 note">＋ 撮影の直後に一度だけ走る</div>

<div class="grid grid-cols-4 gap-3 mt-2">
<div></div>
<div class="box">👴 顔を老けさせる <span class="note">FRAN</span></div>
<div></div>
<div></div>
</div>

<div class="mt-8">

**全部このマシン1台の中**。外に出るのは返事を考えるところだけ。

</div>

<div class="cite mt-4">
常駐で約12GB / 24GB (RTX 3090)。話し終えてから映像が出るまで 3.4〜8秒。
</div>

---

# 先行①　聞き取り — faster-whisper

<div class="grid grid-cols-2 gap-12 mt-8">
<div>

OpenAI の Whisper を高速化した実装。<br>
話した音声を文字にする。

<div class="stat mt-8">0.17秒</div>
<div class="note">4秒の発話を文字にするまで（実測）</div>

</div>
<div class="pt-4">

<div class="note">

使っているモデルは **large-v3-turbo**。<br>
VRAM 1.5GB で常駐させている。

合言葉の画面だけは、**何と言うか決まっている**ので
聞き取りを通さない。誤認識が声質に混ざる経路を消すため。

</div>

</div>
</div>

---

# 先行②　返事を考える — Claude Sonnet 5

<div class="grid grid-cols-2 gap-12 mt-8">
<div>

Anthropic の大規模言語モデル。<br>
「40年後のあなた」として返事を書く。

<div class="stat mt-8">1.3〜1.9秒</div>
<div class="note">最初の1文が返ってくるまで（実測）</div>

</div>
<div class="pt-4">

<div class="note">

**このシステムで唯一ネットワークが要る部分。**<br>
だから会場の回線が読めないことが、そのままリスクになる。

往復が 1.2〜6.4秒とぶれる。平均を縮めても
「遅い回」は消えない、というのが後の設計に効いてくる。

</div>

</div>
</div>

---

# 先行③　声を作る — VoxCPM2

<div class="grid grid-cols-2 gap-12 mt-8">
<div>

数秒の音声を聞かせるだけで、**その人の声**で
別の文章を喋らせられる音声合成。

<div class="stat mt-8">RTF 0.42〜0.48</div>
<div class="note">1秒の音声を作るのに約0.45秒（実測）</div>

</div>
<div class="pt-4">

<div class="note">

合言葉で録った9秒が、そのまま声の materials になる。

**話し方ごと写る**のがこの手法の性質。棒読みで録ると
未来の自分も棒読みになるので、「読み上げて」ではなく
「話しかけて」という指示にしている。

日本語が使えるのは 2B 版だけ（VRAM 約8GB）。

</div>

</div>
</div>

---

# 先行④　顔を喋らせる — Ditto

<div class="grid grid-cols-2 gap-12 mt-8">
<div>

写真1枚と音声から、**その顔が喋っている映像**を作る。

<div class="stat mt-8">31.7 fps</div>
<div class="note">等速（25fps）を超えている。初フレームは0.28秒</div>

</div>
<div class="pt-4">

<div class="note">

ここは作り直しを2回している。

| | 5秒の映像 |
|---|---|
| Wan2.2-S2V | 146秒 |
| EchoMimicV3 | 240秒 |
| **Ditto** | **等速超え** |

映像そのものを拡散モデルで作るのをやめ、動きだけを
作って画像を変形する方式にしたら桁が変わった。

</div>

</div>
</div>

---

# 先行⑤　顔を老けさせる — FRAN

<div class="grid grid-cols-2 gap-12 mt-8">
<div>

Disney Research 由来の再加齢モデル。<br>
顔写真を、指定した年齢の顔に描き変える。

<div class="stat mt-8">0.84秒</div>
<div class="note">1枚を老化させるまで（実測 / VRAM 0.6GB）</div>

</div>
<div class="pt-4">

<div class="note">

合言葉を話してもらっている**9秒の裏**で走らせている。
だから来場者は待ち時間を感じない。

みんなが返した体操の成果は、この「老けた顔」と
「対策した顔」を**混ぜる比率**として効く。
1.0 を返せば対策後の顔に、0.3 なら3割だけ寄る。

</div>

</div>
</div>

---

# 設計の話：遅い回を、見えなくする

<div class="mt-6">

話し終えてから映像が出るまで **3.4〜8秒**。どうやっても数秒かかる。

</div>

<div class="punch mt-8">
速くするのを諦めて、「間」を演技にした。
</div>

<div class="mt-8">

合言葉を録った時点で、その人の声と顔で**相槌を数本先に焼いておく**。
話し終えた直後にまず相槌が流れ、その裏で本当の返事が焼き上がる。

</div>

<div class="note mt-8">
高齢のエージェントがゆっくり考えてから話し出すのは、キャラクターとして自然。<br>
相槌が使えるまで、合言葉の登録から4.1秒（実測）。間に合わなくても壊れない。
</div>

<!--
みんなが作るページでも同じ考え方が使える。
「速くする」以外に「気にならなくする」という手があることを覚えて帰ってほしい。
-->

---
layout: section
class: section
---

# 4. これからやりたいこと

---

# ビジョン：顔を、1つずつ取り戻す

<div class="grid grid-cols-4 gap-4 mt-8 text-center">
<div class="box" style="border-width:2px">
<div class="text-3xl">👄</div>
<div class="font-bold mt-2">口まわり</div>
<div class="note mt-1">ういうい体操</div>
</div>
<div class="box" style="border-width:2px">
<div class="text-3xl">🙂</div>
<div class="font-bold mt-2">口角</div>
<div class="note mt-1">笑顔キープ</div>
</div>
<div class="box" style="border-width:2px">
<div class="text-3xl">👀</div>
<div class="font-bold mt-2">目まわり</div>
<div class="note mt-1">?</div>
</div>
<div class="box" style="border-width:2px">
<div class="text-3xl">🧍</div>
<div class="font-bold mt-2">首・姿勢</div>
<div class="note mt-1">?</div>
</div>
</div>

<div class="punch mt-10">
1つクリアするごとに、未来の自分の顔が明るくなっていく。
</div>

<div class="note mt-8">
ゲームのように、部位を埋めていく体験にしたい。<br>
「全部やった顔」を見たくて、つい最後までやってしまう ——それが理想。
</div>

---

# 今できていること / これからやりたいこと

<div class="grid grid-cols-2 gap-8 mt-8">
<div class="panel panel-done">

### もう動いている

- 撮影 → 老化 → 対話が**等速で**回る
- 体操の結果を顔つきに反映する仕組み
- 部位は4つ定義済み（口・口角・目・首）
- 見本の体操ページが1つ

</div>
<div class="panel panel-next">

### これから（みんなの仕事）

- **部位ごとの体操**が、まだ揃っていない
- 効果の**見え方**が地味。差が伝わる値を探す
- 通りかかった人が足を止める**入口**
- 全部位を通したときの**順番と所要時間**

</div>
</div>

<div class="note mt-8">
右側が、3日間でみんなに埋めてもらうところ。
</div>

---
layout: section
class: section
---

# 5. 約束事は2つだけ

<div class="note mt-4">ここから先が、実際に手を動かす話</div>

---

# 担当する部位を1つ決める

| 部位 | 名前 | 未来の自分がこうなる |
|---|---|---|
| 口まわり | <span class="chip">mouth</span> | 喋るときの口の開閉が大きくなる |
| 表情・口角 | <span class="chip">smile</span> | 口角が上がり、表情が明るくなる |
| 目まわり | <span class="chip">eyes</span> | まぶたが上がり、瞬きが落ち着く |
| 首・姿勢 | <span class="chip">head</span> | うなずきや首の動きが大きくなる |

<div class="note mt-8">
1人〜2人で1部位。最後に全部つないで、顔全体が良くなるところまで持っていく。
</div>

---

# ① フォルダに manifest.json を置く

```json
{
  "name": "ういうい体操",
  "description": "「うー」と「いー」を交互に。口のまわりをほぐします。",
  "parts": ["mouth"],
  "entry": "index.html"
}
```

<div class="note mt-8">
name と description は、体操を選ぶ画面に出る。parts は担当部位。
</div>

---

# ② 終わったら done() を1回呼ぶ

```html
<script src="/exercise-sdk.js"></script>
```

```js
Frailty.done({
  parts: { mouth: 1.0 },          // どの部位を、どれだけ戻せたか (0〜1)
  message: "ういうい体操を10回",
  detail: "口のまわりがよく動くようになりました",
});
```

<div class="punch mt-10">
以上。サーバのことも、誰の体験なのかも、知らなくていい。
</div>

---

# 0〜1 は「どれだけ戻せたか」

<div class="grid grid-cols-2 gap-10 mt-10">
<div>

**やりきった** → `1.0`

**10回中3回** → `0.3`

**やらなかった** → 何も変わらない

</div>
<div>

```js
// 途中でやめた人にも、
// できたぶんは持って帰ってもらう
Frailty.done({
  parts: { smile: 0.3 },
});
```

</div>
</div>

<div class="note mt-10">
「全部やらないと何も変わらない」より、少しでも動いた方が納得感がある。
</div>

---

# 壊しても、壊れない

<div class="mt-8">

- 範囲外の値を返しても → 本体が黙って丸める
- 知らない部位名を書いても → 黙って捨てる
- `done()` を2回呼んでも → 2回目は無視される

</div>

<div class="punch mt-12">
未来の自分が化け物になることはない。<br>思い切って試していい。
</div>

---
layout: section
class: section
---

# 6. 手を動かす

---

# 3分で、動くところまで

```bash
cd ~/latentlink/exercises
cp -r sample/ わたしたちの体操/
```

<div class="mt-8">

`index.html` を**ブラウザで直接開く**。本体を起動しなくても動く。

</div>

<div class="punch mt-10">
done() を呼ぶと、本体に渡るはずの中身がその場に出る。
</div>

<div class="note mt-8">
フォルダに置いた時点で「対策する」の選択肢に出る。サーバの再起動は要らない。
</div>

---

# 見本の中身は、これだけ

<div class="grid grid-cols-3 gap-6 mt-12 text-center">
<div>
<div class="text-4xl">🔘</div>
<div class="mt-3 font-bold">ボタンを押す</div>
<div class="note mt-2">onclick</div>
</div>
<div>
<div class="text-4xl">⏱</div>
<div class="mt-3 font-bold">数を数える</div>
<div class="note mt-2">setInterval</div>
</div>
<div>
<div class="text-4xl">📤</div>
<div class="mt-3 font-bold">結果を返す</div>
<div class="note mt-2">Frailty.done</div>
</div>
</div>

<div class="note mt-14">
はじめてでもここまでは今日中に届く。慣れている人はここから先へ。
</div>

<!--
TODO: 初心者向けに、HTML/JS の最小説明を2〜3枚 (要素を取る / 押されたら動く / 画面を書き換える)
-->

---
layout: section
class: section
---

# 7. どこまでやれるか

---

# 使える道具

<div class="grid grid-cols-2 gap-10 mt-8">
<div>

**カメラ** — 使える。顔の動きを見て判定できる

**音・声** — 鳴らすのも録るのも自由

**タイマー・キーボード** — 何でも

</div>
<div>

**ビルドが要るもの** — React や Vite でもいい

```bash
./scripts/deploy_exercise.sh ~/自分の作業場 名前
```

</div>
</div>

<div class="note mt-12">
カメラは <code>localhost</code> でしか許可されない。開発は自分の PC のブラウザで。
</div>

---

# 詰まりやすいところ

<div class="mt-6">

- **右上に本体の「やめる」ボタンが重なる** → そこに大事なものを置かない
- **全画面で表示される** → 小さい画面前提で作らない
- **効果が地味に見える** → `/tuner` でスライダを動かして焼き比べる

</div>

<div class="punch mt-12">
数値だけで判断しない。必ず焼いて、目で見る。
</div>

---
layout: section
class: section
---

# 8. 良い体験にするために

---

# 何が「興味・関心」につながるのか

<div class="grid grid-cols-3 gap-6 mt-12 text-center">
<div class="p-6" style="background:var(--wc-teal-dim);border-radius:14px">
<div class="font-bold text-xl">リアリティ</div>
<div class="note mt-3">本当にそうなりそう、と思えるか</div>
</div>
<div class="p-6" style="background:var(--wc-teal-dim);border-radius:14px">
<div class="font-bold text-xl">自分ごと感</div>
<div class="note mt-3">他人の話に見えないか</div>
</div>
<div class="p-6" style="background:var(--wc-teal-dim);border-radius:14px">
<div class="font-bold text-xl">楽しさ・斬新さ</div>
<div class="note mt-3">もう一回やりたくなるか</div>
</div>
</div>

<div class="note mt-12">
この3つに入らないものを見つけたら、それが新しい軸になる。付箋に書いて出すこと。
</div>

---

# 作る前に、1文で言えるようにする

<div class="punch mt-10">
「なぜそれが、興味・関心につながるのか」
</div>

<div class="mt-12 note">

言えないまま作ると、2日目の現場で説明できなくなる。<br>
逆に言えていれば、実装が間に合わなくても発表は成立する。

</div>

---

# 現場で確かめる — 2日目

<div class="mt-8">

サンアビリティーズで、実際に体操をしている方を見る。

</div>

<div class="mt-10">

- どんな年齢層で、どんな雰囲気か
- **なぜ続けているのか**、きっかけは何だったか
- 体操中の**表情・声・動作** — 再現度を上げる材料になる

</div>

<div class="punch mt-10">
想定と違ったことを持ち帰る。それが直す根拠になる。
</div>

---
layout: section
class: section
---

# 9. 3日間の進み方

---

# 3日間

<div class="grid grid-cols-3 gap-6 mt-10">
<div>
<div class="chip">1日目</div>
<div class="font-bold text-xl mt-4">体験・分解</div>
<div class="note mt-4">
試して、何が効いていたかを分ける。担当部位を決めて、夜に一番小さいものを動かす。
</div>
</div>
<div>
<div class="chip">2日目</div>
<div class="font-bold text-xl mt-4">実装・現場・評価</div>
<div class="note mt-4">
体操として成立させる。現場を見て直す。夜に全部位をつないで通す。
</div>
</div>
<div>
<div class="chip">3日目</div>
<div class="font-bold text-xl mt-4">発表</div>
<div class="note mt-4">
デモを通す。13:00 から成果発表（10分＋質疑7分）。
</div>
</div>
</div>

<div class="note mt-12">
※ 詳しい時間割は配布のスケジュール表で。
</div>

---

# 発表で話すこと

<div class="mt-8">

1. **背景と課題** — 何を解こうとしたか
2. **立てた要素とその理由** — なぜそれが興味につながると考えたか
3. **作ったもの** — デモ（撮影 → 対話 → 対策 → 効果）
4. **想定通りだったか** — 違ったなら、何が違ったか

</div>

<div class="punch mt-10">
うまくいかなかったことも成果。<br>なぜそうなったかまで言えれば強い。
</div>

---

# まず今日やること

<div class="mt-10">

<div class="text-xl leading-loose">

1. 体験システムを一周する（来場者として）
2. 感じたことを付箋に書く
3. 担当部位を決める
4. `sample/` をコピーして、`done()` が返るところまで動かす

</div>

</div>

<div class="punch mt-12">
今日の夜までに「一番小さいものが動く」。<br>精度も演出も、明日でいい。
</div>

---
layout: center
class: text-center
---

# 詰まったら、すぐ聞く

<div class="note mt-8 text-lg">
1人で30分溶かすより、3分で聞いた方が良いものができる。
</div>
