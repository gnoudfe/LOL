import fetch from "../../client/index";

export const getProducts = () => {
  return fetch.get("/products");
};
