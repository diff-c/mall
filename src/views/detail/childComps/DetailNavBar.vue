<template>
  <div>
    <nav-bar>
      <div slot="left" class="left" @click="back">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="detail">
        <div v-for="(item,index) in titles" :key="item" class="detail-item" :class="{active:currentIndex === index}"
          @click="itemClick(index)">
          {{item}}</div>
      </div>

    </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  components: {
    NavBar
  },
  name: "DetailNavBar",
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    };

  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('itemClick', index)
    },
    back() {
      this.$router.back()
    }
  },
}
</script>
<style  scoped>
.detail {
  display: flex;
  font-size: 14px;
}
.detail-item {
  flex: 1;
}
.left img {
  vertical-align: middle;
}
.active {
  color: var(--color-high-text);
}
</style>