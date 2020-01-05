<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1" class="tab-control"
      v-show="tabControlFixed">
    </tab-control>
    <scroll class="content" ref="scroll" :probeType="3" :pull-up-load="true" @scroll="contentScroll"
      @pullingUp="loadMore">
      <HomeSwiper :banners="banners" @swiperImageLoad.once="swiperImageLoad"></HomeSwiper>
      <recommend :recommends="recommends"></recommend>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2">
      </tab-control>
      <good-list :goods="showGoods"></good-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow" />
  </div>
</template>

<script>


import HomeSwiper from './childrenComponents/HomeSwiper'
import recommend from './childrenComponents/Recommend'
import FeatureView from './childrenComponents/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import { getHomeMultidata, getHomeGoods } from 'network/home'
import { debounce } from 'common/utils'

export default {
  components: {
    HomeSwiper,
    recommend,
    FeatureView,
    NavBar,
    TabControl,
    GoodList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },

      },
      currentType: 'pop',
      isShow: false,
      tabOffsetTop: 0,
      tabControlFixed: false,
      saveY: 0
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata()
    //2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')


  },
  mounted() {
    //3.监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 500)

    this.$bus.$on('itemImageLoad', () => {
      // this.$refs.scroll.refresh()
      refresh()
    })
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()

  },
  deactivated() {

    this.saveY = this.$refs.scroll.getScrollY()
  },
  methods: {
    /**
     *  事件监听相关的方法
     * 
     */
    tabClick(index) {
      switch (index) {
        case 0: this.currentType = 'pop'; break;
        case 1: this.currentType = 'new'; break;
        case 2: this.currentType = 'sell'; break;

      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index

    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)

    },
    contentScroll(position) {
      //1.显示隐藏箭头
      this.isShow = (-position.y) > 1000
      //2.
      this.tabControlFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore() {
      // console.log("上拉加载更多");
      this.getHomeGoods(this.currentType)
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    /**
     * 网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res.data.list);

        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        this.$refs.scroll.finishPullup()

      })
    }

  },
}
</script>

<style scoped>
#home {
  padding-top: 44px;
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
/* .tab-control {
  position: sticky;
  top: 44px;
} */
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
/* .fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
} */
.tab-control {
  position: relative;
  z-index: 9;
}
</style>