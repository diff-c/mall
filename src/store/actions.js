import { ADD_COUNTER, PUSH_DATA } from "./mutations-type";

export default {
  //复杂的判断就放到actions里
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      const product = context.state.cartList.find(function(item) {
        return item.iid === payload.iid;
      });

      if (product) {
        context.commit(ADD_COUNTER, product);
        resolve("商品数量加1");
      } else {
        payload.count = 1;
        context.commit(PUSH_DATA, payload);
        resolve("成功添加商品数量");
      }
    });
  }
};
