<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <p>{{goods.title}}</p>
    <div class="price-info">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="amount">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>

  </div>

</template>
<script>
export default {
  name: "DetailBaseInfo",
  data() {
    return {
    };
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style  scoped>
.base-info {
  padding: 0 5px;
  border-bottom: 5px solid #f2f5f8;
}
.base-info p {
  margin-top: 15px;
}
.price-info {
  margin-top: 5px;
  margin-bottom: 25px;
  position: relative;
}
.new-price {
  font-size: 24px;
  color: var(--color-high-text);
  margin-right: 4px;
}
.old-price {
  font-size: 12px;
  color: #ddd;
  text-decoration: line-through;
}
.discount {
  padding: 2px;
  font-size: 12px;
  background-color: var(--color-tint);
  color: #fff;
  position: absolute;
  top: 0;
  left: 120px;
  border-radius: 5px;
}
.amount {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  display: flex;
  color: #bbb;
  font-size: 12px;
  margin-bottom: 15px;
  line-height: 30px;
}
.amount span {
  flex: 1;
  text-align: center;
}
.amount span:first-child {
  text-align: left;
}
.amount span:last-child {
  text-align: right;
}
.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}

.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}

.info-service-item span {
  font-size: 13px;
  color: #333;
}
</style>