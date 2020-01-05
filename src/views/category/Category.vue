<template>

  <!-- <h2>分类</h2> -->
  <div>
    <h2>分类</h2>
    <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
  </div>

</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null
    }
  },
  // mounted() {
  //   // this.scroll = new BSscroll(this.$refs.wrapper, {
  //   // })
  //   this.scroll = new BScroll(this.$refs.wrapper, {
  //     probeType: 3,
  //     pullUpLoad: true,
  //     click: true
  //   })
  //   this.scroll.on('scroll', (position) => {
  //     console.log(position);
  //   })
  //   this.scroll.on('pullingUp', () => {
  //     console.log("上拉加载更多")

  //     setTimeout(() => {
  //       this.scroll.finishPullUp()
  //     }, 2000)
  //   })
  // }
}
</script>

<style scoped>
.wrapper {
  height: 150px;
  background-color: red;
  overflow: hidden;
}
</style>