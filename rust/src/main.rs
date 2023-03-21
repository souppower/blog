use std::env;
use std::fs;
// use std::io::prelude::*;
use chrono::prelude::*;
use pulldown_cmark::{html, Options, Parser};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let args: Vec<String> = env::args().collect();

    if args.len() < 3 {
        println!("{:?}", args);
        panic!("ファイル名とタイトルを指定してください");
    }

    let path = &args[1];
    let title = &args[2];

    // 記事マークダウン取得
    let article_path = format!("{}.md", path);
    let content = fs::read_to_string(article_path)?;
    let html_content = markdown_to_html(&content);

    let html_template = fs::read_to_string("article-template.html")?;
    let final_html = embed_date(html_template)
        .replace("{title}", title)
        .replace("{content}", &html_content);

    println!("{}", final_html);
    fs::write(format!("dist/{}.html", path), final_html)?;
    println!("HTMLファイルが生成されました: {}.html", path);

    Ok(())
}

fn markdown_to_html(text: &str) -> String {
    let options = Options::all();
    let parser = Parser::new_ext(text, options);

    let mut html_output = String::new();
    html::push_html(&mut html_output, parser);

    html_output
}

fn embed_date(template: String) -> String {
    let formatted_date = format_date(Utc::now().naive_local());
    template.replace("{date}", &formatted_date)
}

fn format_date(date: chrono::NaiveDateTime) -> String {
    let format = "%a, %Y-%m-%d";
    date.format(format).to_string()
}
