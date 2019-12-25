<template>
  <div>
    <tabbar>
      <tab-bar-item path="/home">
        <img src="~assets/img/tabbar/home.svg" slot="item-icon">
        <img src="~assets/img/tabbar/home_active.svg" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="red">
        <img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/category_active.svg" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="blue">
        <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/shopcart_active.svg" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="green">
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/profile_active.svg" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </tab-bar-item>

    </tabbar>
  </div>
</template>

<script>
import tabbar from 'components/common/tabbar/TabBar'
import tabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  components: {
    tabbar,
    tabBarItem
  }
}
</script>

<style>
</style>