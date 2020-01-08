<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @itemClick="itemClick" ref="nav" />
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shops='shops'></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imagesLoad="imagesLoad"></detail-goods-info>
      <detail-param-info ref="params" :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommendInfo"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShow" />
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
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import GoodsList from 'components/content/goods/GoodsList'

import { getDetail, Goods, Shop, GoodsParam, getRecommend } from 'network/detail'
import { debounce } from 'common/utils'

import { itemListenerMixin, backTopMixin } from 'common/mixin'
import scroll from 'components/common/scroll/Scroll'

export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    scroll,
    GoodsList
  },
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shops: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendInfo: [],
      clickChange: [],
      getChange: null,
      currentIndex: null

    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      // console.log(res);
      const data = res.result
      this.topImages = data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shops = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0]
      }
    }),
      getRecommend().then(res => {
        // console.log(res.data.list);
        this.recommendInfo = res.data.list

      })


    // this.scroll.on('scroll', (position) => {
    //   console.log(position);

    // })
  },
  // mounted() {
  //   const refresh = debounce(this.$refs.scroll.refresh, 500)

  //   this.$bus.$on('itemImageLoad', () => {
  //     // this.$refs.scroll.refresh()
  //     refresh()
  //   })
  // },
  mixins: [itemListenerMixin, backTopMixin],
  mounted() {
    this.getChange = debounce(() => {
      this.clickChange = []
      this.clickChange.push(0);
      this.clickChange.push(this.$refs.params.$el.offsetTop);
      this.clickChange.push(this.$refs.comment.$el.offsetTop);
      this.clickChange.push(this.$refs.recommend.$el.offsetTop)

      console.log(this.clickChange);

    }, 300)
  },

  destroyed() {
    this.$bus.$off('itemImageLoad', this.itemListener)
  },
  methods: {
    // imageLoad() {
    //   this.$refs.scroll.refresh()
    // },
    imagesLoad() {
      // console.log('---');
      this.refresh()
      this.getChange();
      // this.$refs.scroll.refresh()
    },
    itemClick(index) {
      // console.log(index)

      this.$refs.scroll.scrollTo(0, -this.clickChange[index], 200)
    },
    contentScroll(position) {
      this.showArrow(position)

      const positionY = -position.y;
      // console.log(position);
      //[0, 15965, 17247, 17464,]
      //
      // 0 - 15
      const length = this.clickChange.length
      for (let i = 0; i < length; i++) {

        if (this.currentIndex !== i && this.clickChange[i] < positionY)
        // if (this.currentIndex !== i && ((i < length - 1 && positionY >= this.clickChange[i] && positionY < this.clickChange[i + 1]) || (i === length - 1 && positionY >= this.clickChange[i]))) 
        {
          this.currentIndex = i;
          console.log(i);


          this.$refs.nav.currentIndex = this.currentIndex
        }

      }



    },
    addToCart() {
      const product = {}
      product.image = this.topImages[0];
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.realPrice = this.goods.realPrice
      product.iid = this.iid

      // this.$store.commit('addCart', product) mutations获取方式
      //actions获取方式
      this.$store.dispatch('addCart', product)
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
  height: calc(100% - 44px - 49px);
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>