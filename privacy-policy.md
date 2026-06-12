# プライバシーポリシー / Privacy Policy

最終更新：2026 年 6 月  
Last updated: June 2026

---

## データの保存について

本アプリが保存するデータはすべて **お使いのブラウザ内** にのみ保存されます。  
外部サーバーへの送信・クラウドへのアップロードは行いません（後述の AI 抽出時の画像送信を除く）。

| データ | 保存場所 | 外部送信 |
|--------|----------|----------|
| レシピデータ | ブラウザ内 IndexedDB | なし |
| API キー（Gemini / OpenAI） | ブラウザ内 LocalStorage | なし |
| UI 言語設定 | ブラウザ内 LocalStorage | なし |
| トークン使用量 | ブラウザ内 LocalStorage | なし |

---

## 外部サービスとの通信

以下の機能を使用した場合のみ、外部 API への通信が発生します。

### 📷 画像からのレシピ抽出（任意）

「📷 この画像から抽出」ボタンを押した場合、**選択された画像が、設定中の AI サービス（Gemini Vision または OpenAI Vision）にアップロードされます**。  
画像と一緒に、ユーザー入力のタイトル（既に入っていれば）と、ご自身の API キーが送信されます。

| サービス | 送信内容 | プライバシーポリシー |
|---------|---------|-----------------|
| Google Gemini Vision | **画像データ**・既存タイトル（任意）・ユーザーの API キー | [Google AI](https://policies.google.com/privacy) |
| OpenAI ChatGPT Vision | **画像データ**・既存タイトル（任意）・ユーザーの API キー | [OpenAI](https://openai.com/policies/privacy-policy) |

> **送信されるのは「ボタンを押した時に選択中の画像 1 枚」のみ**です。  
> アプリが自動的に画像を送信することはありません。  
> 各サービスの API キーはご自身で取得・管理してください。キーはブラウザの LocalStorage に保存され、本アプリの開発者には送信されません。

#### 注意：画像に映る個人情報について

スクショに個人情報（位置情報・連絡先・顔写真など）が映っている場合、それも AI サービスに送信されます。送信前にご確認ください。

### 🎬 YouTube 動画からのレシピ抽出（任意）

「🎬 この動画からレシピを自動入力」ボタンを押した場合、**入力された YouTube の URL が、ご自身の API キーとともに Google（Gemini）に送信され、Gemini が動画の内容（映像・音声）を解析します**。  
ユーザー入力のタイトル（既に入っていれば）も一緒に送信されます。送信されるのはボタンを押した時のみで、アプリが自動的に送信することはありません。

| サービス | 送信内容 | プライバシーポリシー |
|---------|---------|-----------------|
| Google Gemini（動画理解） | **YouTube URL**・既存タイトル（任意）・ユーザーの API キー | [Google AI](https://policies.google.com/privacy) |

### 🔗 YouTube タイトル自動取得（任意）

「YouTube の URL からタイトルを自動取得する」設定が有効な場合、入力された YouTube URL を YouTube oEmbed API に送信してタイトルを取得します。動画本文や個人情報は送信されません。  
この機能は ⚙ 設定 からオフにできます。

### 📋 クリップボード読み取り（ローカルのみ）

追加モーダルを開くと、クリップボード内に URL／画像があるかを検出し「取り込みますか？」と提案します。  
**この処理はすべてブラウザ内で完結し、外部へは一切送信されません**（ユーザーが「使う」ボタンを押した場合のみ、上記の各 API へ送信される可能性があります）。

---

## アクセス解析・トラッキング

本アプリはアクセス解析・広告・トラッキングを一切行いません。  
なお、ホスティングに使用している Cloudflare Pages は Cloudflare のプライバシーポリシーに従ったサーバーログを取得する場合があります。

---

## お問い合わせ

ご不明な点は [GitHub Issues](https://github.com/assistantc-C/recipe-manager/issues) までお知らせください。

---

*This privacy policy is also available in English below.*

---

## Privacy Policy (English)

All data handled by this app is stored **only within your browser**.  
No data is sent to external servers or uploaded to the cloud, except for images uploaded for AI extraction (described below).

| Data | Storage | External Transfer |
|------|---------|-------------------|
| Recipe data | Browser IndexedDB | None |
| API keys (Gemini / OpenAI) | Browser LocalStorage | None |
| UI language setting | Browser LocalStorage | None |
| Token usage count | Browser LocalStorage | None |

### External API Communication

External API requests are made only when you use the following optional features:

**📷 Recipe extraction from image**: When you click "📷 Extract from this image", **the selected image is uploaded to the configured AI service (Google Gemini Vision or OpenAI Vision)**, together with the existing title (if any) and your API key.

| Service | Uploaded data | Privacy policy |
|---------|---------------|----------------|
| Google Gemini Vision | **Image** · existing title (if any) · your API key | [Google AI](https://policies.google.com/privacy) |
| OpenAI ChatGPT Vision | **Image** · existing title (if any) · your API key | [OpenAI](https://openai.com/policies/privacy-policy) |

> Only the single image selected when you press the button is sent. The app does not auto-upload images.  
> Your API key is your own and is stored in your browser's LocalStorage; it is never sent to the app developer.

#### Note about personal information in images

If your screenshot contains personal information (location, contacts, faces, etc.), that will also be sent to the AI service. Please review the image before extracting.

**🎬 Recipe extraction from YouTube video**: When you click "🎬 Extract recipe from this video", **the entered YouTube URL is sent to Google (Gemini) together with your API key**, and Gemini analyzes the video content (visuals and audio). The existing title (if any) is also sent. Nothing is sent unless you press the button.

**🔗 YouTube title fetch**: When enabled, YouTube URLs are sent to the YouTube oEmbed API to retrieve video titles. Only the URL is sent; no video body or personal info. This can be disabled in Settings.

**📋 Clipboard reading (local only)**: When you open the add-recipe modal, the app checks your clipboard for a URL or image and offers to import it. This stays entirely inside your browser; nothing is sent externally unless you tap "Use" (which then triggers the API call above).

### Analytics & Tracking

This app does not collect any analytics, advertising, or tracking data.

### Contact

Questions or concerns: [GitHub Issues](https://github.com/assistantc-C/recipe-manager/issues)
