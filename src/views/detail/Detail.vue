<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <scroll class="content" ref="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shops='shops'></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imagesLoad="imagesLoad"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
    </scroll>

  </div>

  <!-- {{iid}} -->

</template>
<script>

import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo';
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'

import { getDetail, Goods, Shop, GoodsParam } from 'network/detail'


import scroll from 'components/common/scroll/Scroll'

export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    scroll,
    DetailGoodsInfo,
    DetailParamInfo
  },
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shops: {},
      detailInfo: {},
      paramInfo: {}
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.result
      this.topImages = data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shops = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
    })


    // this.scroll.on('scroll', (position) => {
    //   console.log(position);

    // })
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
    },
    imagesLoad() {
      this.$refs.scroll.refresh()

    }
  }
}
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px);
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>