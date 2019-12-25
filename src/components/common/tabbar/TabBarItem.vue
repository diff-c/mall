<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="styleActive">
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // isActive: true,
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    styleActive() {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'yellow'
    }
  },
  methods: {
    itemClick() {
      if (this.$route.path === this.path) {
        return;
      }

      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px; /*常用高度 */
}
.tab-bar-item img {
  vertical-align: middle;
  width: 24px;
  height: 24px;
  margin-top: 5px;
}
.active {
  color: red;
}
</style>