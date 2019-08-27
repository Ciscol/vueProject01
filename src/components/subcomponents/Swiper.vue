<template>
  <div class="swiper">
    <mt-swipe :auto="5000">
      <mt-swipe-item v-for="(item, index) in swiperList" :key="index">
        <!-- <a :href="item.url" target="blank"> -->
        <img class="swiper-item-pic" :src="item[srcName]" alt />
        <!-- </a> -->
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: ["swiperList", "srcName"]
};
</script>


<style lang="scss" scoped>
.swiper {
  height: 200px;
  text-align: center;
}

.swiper-item-pic {
  // width: 100%;
  height: 100%;
}
</style>