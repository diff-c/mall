<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.iid" :goods-item="item" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'


export default {
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style>
.goods {
  padding: 0 5x;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>