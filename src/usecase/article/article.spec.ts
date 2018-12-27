import { Admin, Article } from "domain/types";
import ArticleUsecase from "./article";
import { NewArticle } from "./types";
import ArticleRepo from "./articleRepo";

const mockArticle = {
  id: "id",
  title: "title",
  body: "body",
  published: new Date()
};

class mockArticleRepo implements ArticleRepo {
  add(article: NewArticle) {
    return mockArticle;
  }

  edit(article: NewArticle) {
    return mockArticle;
  }

  delete(id: Article["id"]) {}

  get(id: Article["id"]) {
    return mockArticle;
  }

  list() {
    return [];
  }
}

describe("Article Usecase", () => {
  const repo = new mockArticleRepo();
  const usecase = new ArticleUsecase(repo);
  describe("Save", () => {
    test("正常系", () => {
      expect(usecase.save(mockArticle)).toBe(undefined);
    });
  });

  describe("Edit", () => {
    test("正常系", () => {
      expect(usecase.edit(mockArticle)).toEqual(mockArticle);
    });
  });

  describe("Get", () => {
    test("正常系", () => {
      expect(usecase.get("test-id")).toEqual(mockArticle);
    });
  });

  describe("Delete", () => {
    test("正常系", () => {
      expect(usecase.delete("test-id")).toBe(null);
    });
  });

  describe("Publish", () => {
    test("正常系", () => {
      expect(usecase.publish("test-id")).toBe(null);
    });
  });

  describe("Unpublish", () => {
    test("正常系", () => {
      expect(usecase.unpublish("test-id")).toBe(null);
    });
  });
});
