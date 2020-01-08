import { ADD_COUNTER, PUSH_DATA } from "./mutations-type";

export default {
  //复杂的判断就放到actions里
  addCart(context, payload) {
    const product = context.state.cartList.find(function(item) {
      return item.iid === payload.iid;
    });

    if (product) {
      context.commit(ADD_COUNTER, product);
    } else {
      payload.count = 1;
      context.commit(PUSH_DATA, payload);
    }

    console.log(context.state.cartList);
  }
};
