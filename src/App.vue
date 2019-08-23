<template>
  <div class="container">
    <!-- header -->
    <mt-header fixed title="APP"></mt-header>

    <!-- nav -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>

    <!-- middle -->
    <div class="middle">
      <transition >
        <router-view></router-view>
      </transition>
    </div>
    <!-- middle -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.container {
  padding-top: 40px;
  overflow-x: hidden;
}

.v-enter,
.v-leave-to{
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to{
  transform: translateX(-100%);
  position: absolute;
  top: 40px;
}


.v-enter-active,
.v-leave-active{
  transition: 1s ease;
}
</style>