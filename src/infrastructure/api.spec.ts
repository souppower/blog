import APIFactory from "./api";

describe("API", () => {
  const articles = [{ id: "1", title: "title1" }, { id: "2", title: "title2" }];

  const fakeFetch = () => {
    return Promise.resolve({
      json: () =>
        Promise.resolve({
          data: articles
        })
    });
  };

  const API = APIFactory(fakeFetch as any);
  describe("Get", () => {
    test.only("正常系", async () => {
      const res = await API.get("/posts");
      expect(res.data).toEqual(articles);
    });
    test("異常系", () => {});
  });

  describe("Post", () => {
    test("正常系", () => {});
    test("異常系", () => {});
  });

  describe("Put", () => {
    test("正常系", () => {});
    test("異常系", () => {});
  });

  describe("Delete", () => {
    test("正常系", () => {});
    test("異常系", () => {});
  });
});
