<template>
  <div class="home">
    <div class="lunbo">
      <mt-swipe :auto="5000">
        <mt-swipe-item v-for="(item, index) in lunboList" :key="index">
          <!-- <a href=""> -->
          <a :href="item.url" target="blank">
            <img class="lunbo-item-pic" :src="item.img" alt />
          </a>
          <!-- </a> -->
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li
        class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
        v-for="(item, index) in mediaList"
        :key="index"
      >
        <a :href="item.url">
          <img class="mediaList-img" :src="item.image" alt="">
          <div class="mui-media-body" v-text="item.name"></div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

const addr = "http://www.liulongbin.top:3005";

export default {
  data() {
    return {
      lunboList: [],
      mediaList: [
        { id: 1, name: "新闻资讯", image: require("../../images/menu1.png"), url: "#" },
        { id: 2, name: "图片分享", image: require("../../images/menu2.png"), url: "#" },
        { id: 3, name: "商品购买", image: require("../../images/menu3.png"), url: "#" },
        { id: 4, name: "留言反馈", image: require("../../images/menu4.png"), url: "#" },
        { id: 5, name: "视频专区", image: require("../../images/menu5.png"), url: "#" },
        { id: 6, name: "联系我们", image: require("../../images/menu6.png"), url: "#" }
      ]
    };
  },
  methods: {
    getLunbotu() {
      this.$http.get(addr + "/api/getlunbo").then(result => {
        if (result.body.status === 0) {
          this.lunboList = result.body.message;
        } else {
          Toast("ERROR：加载轮播图失败");
        }
      });
    }
  },
  created() {
    this.getLunbotu();
  }
};
</script>

<style scoped>
.lunbo {
  height: 200px;
}

.lunbo-item-pic {
  width: 100%;
  height: 100%;
}

.mui-grid-view.mui-grid-9 {
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  background-color: #fff;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
}

.mediaList-img {
  width: 60px;
  height: 60px;
}

.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
  font-size: 13px;
}
</style>