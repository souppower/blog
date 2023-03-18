const fs = require('fs');
const {marked} = require('marked');

if (process.argv.length < 3) {
    throw Error("ファイル名を指定してください")
}
const title = process.argv[2];

// 記事マークダウン取得
const content = fs.readFileSync(`${title}.md`, 'utf-8');
const htmlContent = marked(content);

const htmlTemplate = fs.readFileSync('template.html', 'utf-8');
const finalHtml = htmlTemplate.replace('{content}', htmlContent);

fs.writeFile(`dist/${title}.html`, finalHtml, (err) => {
    if (err) throw err;
    console.log(`HTMLファイルが生成されました: ${title}.html`);
});
