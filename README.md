# レシピ管理アプリ 🍳

スクショ／画像からレシピを自動入力できる、ローカル完結・PWA 対応の Web アプリ

**[🚀 今すぐ使う → https://recipe-manager-cmp.pages.dev/](https://recipe-manager-cmp.pages.dev/)**

---

## 特徴

- **📷 画像から自動入力** — レシピ動画／サイトのスクショ、料理本の写真などから、AI がタイトル・材料・手順を一括抽出（Gemini Vision / OpenAI Vision 対応）
- **📋 ペースト／タップで取り込み** — PC は Ctrl+V でクリップボードから即取り込み、スマホはタップでカメラロールから選択
- **🔒 ローカル完結** — レシピデータはすべてブラウザ内（IndexedDB）に保存。外部サーバーへの送信は AI 抽出時の画像のみ
- **📱 PWA 対応** — スマホのホーム画面に追加してアプリのように使える（iOS / Android）
- **🔗 共有メニュー対応（Android / Chrome）** — PWA インストール後、他アプリの共有メニューからレシピ追加
- **🌐 日本語 / English** — UI の言語を切り替え可能
- **📦 JSON エクスポート** — データを JSON で持ち出せる。他の AI ツールにも直接渡せる
- **💰 基本無料** — AI 抽出機能は Gemini / ChatGPT の API キーを自前で用意（Gemini は無料枠あり）

---

## スクリーンショット

| メイン画面 | 設定（API キー） |
|:---:|:---:|
| ![メイン画面](docs/screenshot-main.png) | ![設定画面](docs/screenshot-settings.png) |

---

## 使い方

### 1. アプリを開く

[https://recipe-manager-cmp.pages.dev/](https://recipe-manager-cmp.pages.dev/)

スマホは「ホーム画面に追加」でアプリとして使えます。

### 2. AI 抽出を使う場合：API キー設定（任意）

⚙ 設定 → Gemini または ChatGPT の API キーを入力して保存

| サービス | 無料枠 | 画像認識対応モデル | 取得先 |
|---------|--------|------|--------|
| Google Gemini | あり（Gemini 2.5 Flash 等） | 全モデル | [Google AI Studio](https://aistudio.google.com/) |
| OpenAI ChatGPT | 有料（$5〜） | gpt-4o / gpt-4o-mini / gpt-4-turbo | [OpenAI Platform](https://platform.openai.com/) |

> API キーはブラウザの LocalStorage にのみ保存されます。外部サーバー（開発者）には送信されません。

### 3. レシピを追加する

「＋ レシピを追加」を押すと追加モーダルが開きます。以下のいずれかの方法で取り込めます。

#### 📷 画像から自動入力（おすすめ）

1. レシピ動画／サイトの**スクショを撮る**（または料理本の写真を撮る）
2. 追加モーダルを開く
3. クリップボードに画像があれば「📋 クリップボードに画像があります」バナーが出る → 「この画像を使う」
   - または PC：ペーストゾーンに **Ctrl+V** で貼り付け
   - または スマホ：ペーストゾーンをタップ → カメラロールから選択
4. 「📷 この画像から抽出」をタップ → タイトル・材料・手順が自動入力

#### ✍ 手動入力

タイトル・材料・手順を直接入力して保存。API キー不要。

### 4. 共有メニューからレシピを追加（Android / Chrome）

PWA をインストールすると、YouTube アプリやブラウザの「共有」メニューに「レシピ管理アプリ」が出現。共有 → 選択で追加モーダルに URL が自動入力されます（タイトルも自動取得）。

> iOS / Safari は Web Share Target API に未対応のため、本機能は使えません。  
> iOS では「**スクショ → アプリ起動 → クリップボード自動検知**」のフローをご利用ください。

---

## データについて

| 項目 | 保存先 | 外部送信 |
|------|--------|----------|
| レシピデータ | ブラウザ内 IndexedDB | なし |
| API キー | ブラウザ内 LocalStorage | なし |
| バックアップ | エクスポート機能で JSON ファイルとして保存 / インポートも可 | なし |
| **画像（AI 抽出時）** | — | 設定中の AI サービスに送信 |

詳しくは [プライバシーポリシー](privacy-policy.md) を参照。

---

## 技術スタック

- 単一 HTML ファイル（外部フレームワークなし）
- IndexedDB（ブラウザ内データベース）
- Service Worker（PWA・オフラインキャッシュ）
- Google Gemini Vision / OpenAI Vision（任意・画像からのレシピ抽出）
- YouTube oEmbed API（URL からタイトル自動取得・任意）

---

## ライセンス

[MIT License](LICENSE)
