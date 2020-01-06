<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages" :key="item">
      <img :src="item" @load="imgLoad" />
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
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  name: "component_name",
  data() {
    return {
    };
  },
  methods: {
    imgLoad() {
      this.$emit('imageLoad')
    }
  },
}
</script>
<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>