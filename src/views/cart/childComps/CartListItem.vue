<template>
  <div v-if="Object.keys(itemInfo).length!==0" id="shop-item">
    <div class="item-selector">
      <!-- <check-button :is-checked="itemInfo.checked" @click.native="checkClick" /> -->
      <check-button :isChecked="itemInfo.checked" @click.native="checkChange" />
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">{{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{itemInfo.realPrice}}</div>
        <div class="item-count right">x{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
  name: "CartListItem",
  components: {
    CheckButton
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    checkChange() {
      this.itemInfo.checked = !this.itemInfo.checked
    }
  }
};
</script>

<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img {
  padding: 5px;
}
.item-img img {
  width: 80px;
  height: 100px;
  border-radius: 5px;
  display: block;
}
.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 5px;
  position: relative;
  overflow: hidden;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.info-bottom {
  position: absolute;
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.info-bottom .item-price {
  color: orangered;
}
</style>