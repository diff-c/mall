import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: " http://123.207.32.32:8000"
  });

  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      console.log(err);
    }
  );

  instance.interceptors.response.use(res => {
    return res.data;
  });

  return instance(config);
}
