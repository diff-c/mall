<template>
  <div id="app">

    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>

    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>

import router from './router'

import mainTabBar from 'components/content/mainTabbar/MainTabbar'

export default {
  name: 'app',
  router,
  components: {
    mainTabBar
  },

}
</script>

<style>
@import "assets/css/base.css";
</style>
