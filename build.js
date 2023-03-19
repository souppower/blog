import fs from 'fs';
import {marked} from 'marked';

if (process.argv.length < 3) {
    throw Error("ファイル名を指定してください")
}
const title = process.argv[2];

// 記事マークダウン取得
const content = fs.readFileSync(`./articles/${title}.md`, 'utf-8');
const htmlContent = marked(content);


function embedDate(template) {
    function formatDate(date) {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'short',
        };

        return date.toLocaleDateString('ja-JP', options);
    }

    const currentDate = new Date();

    return template.replace('{date}', formatDate(currentDate));
}

const htmlTemplate = fs.readFileSync('template.html', 'utf-8');
const temp = embedDate(htmlTemplate);

const finalHtml = temp.replace('{content}', htmlContent);

fs.writeFile(`dist/${title}.html`, finalHtml, (err) => {
    if (err) throw err;
    console.log(`HTMLファイルが生成されました: ${title}.html`);
});
