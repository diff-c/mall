<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" alt="" @load.once="imageLoad">
      </a>
    </swiper-item>
  </swiper>

</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imageLoad() {
      this.$emit('swiperImageLoad')
    }
  },
}
</script>

<style>
</style>