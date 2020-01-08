<template>
  <div class="cart-bottom-bar">

    <check-button class="check-button" :is-checked="selectAll" @click.native="checkClick"></check-button>
    <span class="checkAll">全选</span>

    <div class="price">合计:{{'￥' + getSum}}</div>
    <div class="amount">去计算 ({{getAmount}}) </div>
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
      this.$store.state.cartList = 
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

      return !(this.cartList.filter(item => !item.checked)).length
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
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin: 0 5px;
}
.checkAll {
  width: 60px;
}
.price {
  flex: 1;
}
.amount {
  color: #fff;
  width: 90px;
  background-color: red;
  text-align: center;
}
</style>