![kintoneCafeTitle](image/kintone-cafe-tokyo-2_logo.png)

## Contents
* **kintone-Cafe-Tokyo-2-pack.zip**：「社員名簿」と「電話メモ」アプリテンプレート（パック）です。「電話メモ」には`sampleSendGridTemplate.js`が含まれていますので、適宜差し替えてください。

* **./plugins**：プラグイン群を保存するディレクトリです。パッケージングすると、配下に`keys`や`plugins`といったディレクトリが生成されます。

* **./plugins/sendmail**：今回のハンズオンの元になるSendGridを利用したメール送信プラグインのソースファイルです。`sampleSendGridTemplate.js`を元に作成してあります。

* **sampleSendGridTemplate.js**：「[kintone Café 福岡 Vol.3](http://www.slideshare.net/yamaryu0508b/kintone-caf-vol3kintone-javascriptkintoneproxysendgrid "kintone Café Fukuoka Vol.3 (presentation on Slideshare)")」でカスタマイズしたSendGridを利用したメール送信用JavaScriptファイルです。

![kintone-sendgrid](image/kintone-sendgrid.jpg)

## Reference
* [kintone plugin リファレンス](https://cybozudev.zendesk.com/hc/ja/categories/200219390-kintone-plugin)（cybozu.com developer network内）
* [kintoneフィールド形式](https://cybozudev.zendesk.com/hc/ja/articles/202166330)（cybozu.com developer network内）
* kintone Café Fukuoka Vol.3 (presentation on Slideshare) [[日本語](http://www.slideshare.net/yamaryu0508b/kintone-caf-vol3kintone-javascriptkintoneproxysendgrid "kintone Café Fukuoka Vol.3 (presentation on Slideshare)")]
* SendGrid APIドキュメント [[English](https://sendgrid.com/docs/API_Reference/Web_API/mail.html "SendGrid APIドキュメント")]
