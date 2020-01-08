import Vue from "vue";
import App from "./App.vue";

import store from "./store";
import router from "./router";

//图片懒加载
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload);

import FastClick from "fastclick";
FastClick.attach(document.body);
Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue({});

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
