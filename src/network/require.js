import axios from "axios";

export function request(config) {
  const instance = axios.create({});

  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      console.log(err);
    }
  );

  instance.interceptors.response.use(res => {
    return res;
  });

  return instance(config);
}
