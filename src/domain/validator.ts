import { Admin, Article } from "./types";

export const validateAdmin = (admin: Admin) => {
  if (admin.name.length > 10) {
    return false;
  }
  return true;
};

export const validateArticle = (article: Article) => {
  return true;
};
