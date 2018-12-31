import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { api, baseURL, instance } from "./api";

describe("API", () => {
  const mock = new MockAdapter(instance);
  const post = { id: "1", title: "title1" };

  afterEach(() => {
    mock.reset();
  });

  describe("Get", () => {
    test("正常系", async () => {
      mock.onGet(`/posts/1`).reply(200, post);
      const res = await api.get("posts/1");
      expect(res).toEqual(post);
    });

    test("異常系", async () => {
      mock.onGet(`${baseURL}/posts/1`).reply(500);
      api.get("/posts/1").catch(e => expect(e).toBeFalsy());
    });
  });

  describe("Post", () => {
    test("正常系", async () => {
      mock.onPost(`${baseURL}/posts`, post).reply(200, post);
      const res = await api.post("/posts", post);
      expect(res).toEqual(post);
    });

    test("異常系", async () => {
      mock.onPost(`${baseURL}/posts`, post).reply(500);
      api.post("/posts", post).catch(e => expect(e).toBeFalsy());
    });
  });

  describe("Put", () => {
    test("正常系", async () => {
      mock.onPut(`${baseURL}/posts`, post).reply(200, post);
      const res = await api.put("/posts", post);
      expect(res).toEqual(post);
    });

    test("異常系", async () => {
      mock.onPut(`${baseURL}/posts`, post).reply(500);
      api.put("/posts", post).catch(e => expect(e).toBeFalsy());
    });
  });

  describe("Delete", () => {
    test("正常系", async () => {
      mock.onDelete(`${baseURL}/posts/1`).reply(200, post);
      const res = await api.remove("/posts/1");
      expect(res).toEqual(post);
    });

    test("異常系", async () => {
      mock.onDelete(`${baseURL}/posts/1`).reply(500);
      api.remove("/posts/1").catch(e => expect(e).toBeFalsy());
    });
  });
});
