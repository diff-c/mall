<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null,

    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    })
    //2.监听滚动的位置
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)

    })
    //3.监听上拉事件
    this.scroll.on('pullingUp', () => {

      this.$emit('pullingUp')
      // this.scroll.finishPullUp()
    })

  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullup() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      // console.log(this.scroll);
      this.scroll && this.scroll.refresh()
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style>
</style>

