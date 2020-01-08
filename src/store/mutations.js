import { ADD_COUNTER, PUSH_DATA } from "./mutations-type";

export default {
  //3种思路，for循环，indexOf，ES6find
  [ADD_COUNTER](state, payload) {
    payload.count += 1;
  },
  [PUSH_DATA](state, payload) {
    payload.checked = true;
    state.cartList.push(payload);
  }
};
