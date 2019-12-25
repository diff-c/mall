import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//组件懒加载
const home = () => import("views/home/Home");
const category = () => import("views/category/Category");
const profile = () => import("views/profile/Profile");
const cart = () => import("views/cart/Cart");

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: home },
    { path: "/category", component: category },
    { path: "/cart", component: cart },
    { path: "/profile", component: profile }
  ],
  mode: "history"
});

export default router;
