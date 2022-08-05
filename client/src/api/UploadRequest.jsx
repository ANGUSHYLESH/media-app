import axios from "axios";

const API = axios.create({
  baseURL: "https://server-side-media.herokuapp.com/",
});

export const uploadImage = (data) => API.post("/upload/", data);
export const uploadPost = (data) =>
  API.post("/post", data, { headers: { "Content-Type": "application/json" } });

