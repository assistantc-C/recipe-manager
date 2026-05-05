# プライバシーポリシー / Privacy Policy

最終更新：2026年5月  
Last updated: May 2026

---

## データの保存について

本アプリが保存するデータはすべて **お使いのブラウザ内** にのみ保存されます。  
外部サーバーへの送信・クラウドへのアップロードは行いません。

| データ | 保存場所 | 外部送信 |
|--------|----------|----------|
| レシピデータ | ブラウザ内 IndexedDB | なし |
| APIキー（Gemini / OpenAI） | ブラウザ内 LocalStorage | なし |
| UI言語設定 | ブラウザ内 LocalStorage | なし |
| トークン使用量 | ブラウザ内 LocalStorage | なし |

---

## 外部サービスとの通信

以下の機能を使用した場合のみ、外部APIへの通信が発生します。

### AI自動解析（任意）

「✨ AIで解析」ボタンを押した場合、入力されたテキストまたはURLの内容が選択中のAIサービスに送信されます。

| サービス | 送信内容 | プライバシーポリシー |
|---------|---------|-----------------|
| Google Gemini | 入力テキスト / URL内容・ユーザーのAPIキー | [Google AI](https://policies.google.com/privacy) |
| OpenAI ChatGPT | 入力テキスト / URL内容・ユーザーのAPIキー | [OpenAI](https://openai.com/policies/privacy-policy) |

> 各サービスのAPIキーはご自身で取得・管理してください。  
> キーはブラウザのLocalStorageに保存され、本アプリの開発者には送信されません。

### YouTubeタイトル自動取得（任意）

「YouTubeのURLからタイトルを自動取得する」設定が有効な場合、YouTubeのURLをYouTube oEmbed APIに送信してタイトルを取得します。  
この機能は設定からオフにできます。

---

## アクセス解析・トラッキング

本アプリはアクセス解析・広告・トラッキングを一切行いません。  
なお、ホスティングに使用している GitHub Pages は GitHub のプライバシーポリシーに従ったサーバーログを取得する場合があります。

---

## お問い合わせ

ご不明な点は [GitHub Issues](https://github.com/assistantc-C/recipe-manager/issues) までお知らせください。

---

*This privacy policy is also available in English below.*

---

## Privacy Policy (English)

All data handled by this app is stored **only within your browser**.  
No data is sent to external servers or uploaded to the cloud.

| Data | Storage | External Transfer |
|------|---------|-------------------|
| Recipe data | Browser IndexedDB | None |
| API keys (Gemini / OpenAI) | Browser LocalStorage | None |
| UI language setting | Browser LocalStorage | None |
| Token usage count | Browser LocalStorage | None |

### External API Communication

Communication with external APIs occurs only when you use the following optional features:

**AI Auto-Parse**: When you click "✨ AI Parse", the text or URL content you entered is sent to the selected AI service (Google Gemini or OpenAI) along with your API key for authentication. Your API key is stored in your browser's LocalStorage and is never sent to the app developer.

**YouTube Title Fetch**: When enabled, YouTube URLs are sent to the YouTube oEmbed API to retrieve video titles. This can be disabled in Settings.

### Analytics & Tracking

This app does not collect any analytics, advertising, or tracking data.
