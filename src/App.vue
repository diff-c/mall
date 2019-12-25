<template>
  <div id="app">
    <router-view></router-view>
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
