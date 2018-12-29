import ArticleRepository from "./index";
import API, { mockArticle } from "interface/repository/mocks/api";

describe("Article Repository", () => {
  const repo = new ArticleRepository(new API());

  describe("Create", () => {
    test("正常系", () => {
      const article = {
        title: "test-title",
        body: "test-body"
      };
      expect(repo.create(article)).toEqual(mockArticle);
    });
  });

  describe("Edit", () => {
    test("正常系", () => {
      const article = {
        id: "sample-id",
        title: "test-title",
        body: "test-body",
        published: new Date()
      };
      expect(repo.edit(article)).toEqual(mockArticle);
    });
  });

  describe("Delete", () => {
    test("正常系", () => {
      expect(repo.delete("sample-id")).toBe(null);
    });
  });

  describe("Get", () => {
    test("正常系", () => {
      expect(repo.get("test-id")).toBe(mockArticle);
    });
  });

  describe("List", () => {
    test("正常系", () => {
      expect(repo.list()).toEqual([]);
    });
  });
});
