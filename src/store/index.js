import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations,
  actions,
  modules: {},
  getters
});

export default store;
