export const mockArticle = {
  id: "id",
  title: "title",
  body: "body",
  published: new Date()
};

class API {
  get(id: string) {
    return mockArticle;
  }
  post() {
    return mockArticle;
  }
  put() {
    return mockArticle;
  }
  delete(id: string) {
    return null;
  }
}

export default API;
