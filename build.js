import fs from "fs";
import { marked } from "marked";

if (process.argv.length < 4) {
  throw Error("ファイル名とタイトルを指定してください");
}
const path = process.argv[2];
const title = process.argv[3];

// 記事マークダウン取得
const content = fs.readFileSync(`./articles/${path}.md`, "utf-8");
const htmlContent = marked(content);

function embedDate(template) {
  function formatDate(date) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "short",
    };

    return date.toLocaleDateString("ja-JP", options);
  }

  const currentDate = new Date();

  return template.replace("{date}", formatDate(currentDate));
}

const htmlTemplate = fs.readFileSync("article-template.html", "utf-8");
const finalHtml = embedDate(htmlTemplate)
  .replace("{title}", title)
  .replace("{content}", htmlContent);

fs.writeFile(`dist/${path}.html`, finalHtml, (err) => {
  if (err) throw err;
  console.log(`HTMLファイルが生成されました: ${path}.html`);
});
