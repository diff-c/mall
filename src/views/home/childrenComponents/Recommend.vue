<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.sort" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  padding: 10px;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommends-item {
  flex: 1;
}
.recommends-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>