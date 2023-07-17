import axios from "axios";

const Client = axios.create({
  baseURL: import.meta.env.VITE_API_LINK,
});

export const login = (data) => {
  return Client.post("/users/login", data);
};

export const signup = (data) => {
  return Client.post("/users/signup", data);
};

export const getProductsByUserId = (data) => {
  return Client.get(`/products/${data.userId}`);
};

export const postProduct = (data) => {
  return Client.post("/products", data);
};

export const updateProductById = (data) => {
  return Client.patch(`/products/${data.productId}`, data);
};

export const deleteProductById = (data) => {
  return Client.delete(`/products/${data.productId}`);
};
