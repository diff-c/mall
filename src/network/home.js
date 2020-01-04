import { request } from "./require";

export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  });
}

export function getHomeGoods(type, page) {
  return request({
    url: "/api/w1/home/data",
    params: {
      type,
      page
    }
    //http://123.207.32.32:8000/api/w1/home/data?type=new&page=1
  });
}
