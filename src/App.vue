<template>
  <div class="container">
    <!-- header -->
    <mt-header fixed title="APP">
      <span slot="left" @click="goBack" v-show="isHidden">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>

    <!-- nav -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-llb" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/shopcart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{$store.getters.shoppingTotal}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>

    <!-- middle -->
    <div class="middle">
      <transition>
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
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  computed: {
    isHidden() {
      var path = this.$route.path;
      return !(
        path === "/home" ||
        path === "/member" ||
        path === "/shopcart" ||
        path === "/search"
      );
    }
  }
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}

.container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
.mint-header.is-fixed {
  z-index: 99;
}

.mui-bar mui-bar-tab {
  z-index: 99;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  transform: translateX(-100%);
  position: absolute;
  top: 40px;
}

.v-enter-active,
.v-leave-active {
  transition: 0.4s ease;
}
</style>