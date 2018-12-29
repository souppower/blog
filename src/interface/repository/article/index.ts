import { Article } from "domain";
import { NewArticle } from "usecase/article/types";
import ArticleRepo from "usecase/article/articleRepo";
import API from "interface/repository/repo";

class ArticleRepository implements ArticleRepo {
  constructor(private api: API) {}

  create(article: NewArticle) {
    return this.api.post(article);
  }

  edit(article: Article) {
    return this.api.post(article);
  }

  delete(id: Article["id"]) {
    return this.api.delete(id);
  }

  get(id: Article["id"]) {
    return this.api.get(id);
  }

  list(): Article[] {
    return [];
  }
}

export default ArticleRepository;
