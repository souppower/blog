import { Article } from "domain";
import { NewArticle } from "./types";

export default interface ArticleRepo {
  create(article: NewArticle): Article;
  edit(article: Article): Article;
  delete(id: Article["id"]): void;
  get(id: Article["id"]): Article | null;
  list(): Article[];
}
