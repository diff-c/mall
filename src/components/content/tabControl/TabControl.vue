<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="item" class="tab-control-item" :class="{active:index===currentIndex}"
      @click="changeIndex(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
    }
  },
}
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  background-color: pink;
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.active span {
  padding: 5px;
  /* display: inline-block; */
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
</style>