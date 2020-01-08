<template>
  <div class="cart-bottom-bar">

    <check-button class="check-button" :is-checked="selectAll" @click.native="checkClick"></check-button>
    <span class="checkAll">全选</span>

    <div class="price">合计:{{'￥' + getSum}}</div>
    <div class="total">去计算 ({{getAmount}}) </div>
  </div>

</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import { mapGetters } from 'vuex'

export default {
  components: {
    CheckButton
  },
  methods: {
    checkClick() {
      if (this.selectAll) {
        this.cartList.forEach(item => {
          item.checked = false
        })
      } else {
        this.cartList.forEach(item => {
          item.checked = true
        })
      }
    }
  },
  computed: {
    ...mapGetters(['cartList']),
    getSum() {
      console.log(this.cartList);

      return this.cartList.filter(item => {
        return item.checked === true
      }).reduce((prevalue, item) => {
        return prevalue + item.count * item.realPrice
      }, 0).toFixed(2)
    },
    getAmount() {
      return this.cartList.filter(item => {
        return item.checked === true
      }).reduce((prevalue, item) => {
        return prevalue + item.count
      }, 0)
    },
    selectAll() {
      if (this.cartList.length === 0) {
        return false
      }

      //this.cartList.filter(item => !item.checked) 返回不是checked的数组对象，。length结果肯定有数，因为有没选中的，所以这个是不亮的


      return !(this.cartList.filter(item => !item.checked)).length

      // return !(this.cartList.find(item => !item.checked)).length
    }
  }
}
</script>

<style>
.cart-bottom-bar {
  height: 40px;
  background-color: #eee;
  position: relative;
  left: 0;
  display: flex;
  bottom: 40px;
  line-height: 40px;
  align-items: center;
  font-size: 14px;
  padding-left: 5px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
}
.checkAll {
  margin-left: 10px;
  width: 60px;
}
.price {
  flex: 1;
}
.total {
  color: #fff;
  width: 90px;
  background-color: red;
  text-align: center;
}
</style>