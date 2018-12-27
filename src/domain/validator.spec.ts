import { Admin, Article } from "./types";
import { validateAdmin, validateArticle } from "./validator";

describe("validator", () => {
  describe("validateAdmin", () => {
    test("正常系", () => {
      const admin = {
        id: "test-id",
        name: "Jon Doe",
        description: "hello world"
      };
      expect(validateAdmin(admin)).toBeTruthy();
    });
    test("名前の長さ", () => {
      const admin = {
        id: "test-id",
        name: "1234567890"
      };
      const longNameAdmin = {
        ...admin,
        name: "12345678901"
      };
      expect(validateAdmin(admin)).toBeTruthy();
      expect(validateAdmin(longNameAdmin)).toBeFalsy();
    });
  });

  describe("validateArticle", () => {
    test("正常系", () => {
      const article: Article = {
        id: "test-id",
        title: "First Article",
        body: "Hello world",
        published: new Date()
      };
      expect(validateArticle(article)).toBeTruthy();
    });
  });
});
