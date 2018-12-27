import { Article } from "domain";
import ArticleRepo from "./articleRepo";
import { NewArticle } from "./types";

class ArticleUsecase {
  constructor(private articleRepo: ArticleRepo) {}

  save(article: NewArticle) {
    this.articleRepo.add(article);
  }

  edit(article: Article) {
    return this.articleRepo.edit(article);
  }

  get(id: Article["id"]): Article | null {
    return this.articleRepo.get(id);
  }

  delete(id: Article["id"]) {
    this.articleRepo.delete(id);
    return null;
  }

  publish(id: Article["id"]) {
    const article = this.get(id);
    if (!article) {
      throw new Error(`no such article. id=${id}`);
    }
    this.articleRepo.edit({ ...article, published: new Date() });
    return null;
  }

  unpublish(id: Article["id"]) {
    const article = this.get(id);
    if (!article) {
      throw new Error(`no such article. id=${id}`);
    }
    this.articleRepo.edit({ ...article, published: null });
    return null;
  }
}

export default ArticleUsecase;
