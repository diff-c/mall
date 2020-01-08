<template>
  <div class="goods-item" @click='itemClick'>
    <img v-lazy="showImage" @load="imgLoad" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('itemImageLoad')
    },
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },
}
</script>

<style>
.goods-item {
  padding: 5px;
  flex: 48%;
  position: relative;
  padding-bottom: 40px;
  text-align: center;
}
.goods-item img {
  width: 100%;
  border-radius: 4%;
}
.goods-info {
  position: absolute;
  right: 0;
  left: 0;
  font-size: 12px;
}
.goods-info p {
  text-indent: 0.5em;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 4px;
}
.goods-info .collect {
  position: relative;
  margin-left: 15px;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  top: 0;
  left: -4vw;
  width: 3.73333vw;
  height: 3.73333vw;
  background: url("~assets/img/common/collect.svg") 0 0/3.73333vw 3.73333vw;
}
</style>