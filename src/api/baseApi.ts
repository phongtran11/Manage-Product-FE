import { getStorage } from "../util";
import axios, { AxiosInstance } from "axios";

const baseURL = "http://localhost:4200";

export const InstanceAxios: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

InstanceAxios.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers["Authorization"] = `Bearer ${getStorage("token")}`;
  }

  return config;
});