<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <!-- @tap="getPhotoByCategory(item.id)" -->
          <span
            v-for="(item, index) in imgCategory"
            :key="index"
            :class="['mui-control-item', index === 0 ? 'mui-active' : '' ]"
            :href="'#item'+ (index+1) +'mobile'"
            :data-wid="'tab-top-subpage-'+ (index+1) +'.html'"
            v-cloak
            @click="getImages(item.id)"
          >{{item.title}}</span>
        </div>
      </div>
    </div>

    <div class="photo-list">
      <ul>
        <li v-for="(item, index) in images" :key="index">
          <img v-lazy="item.img_url" />
          <div class="img-info">
            <h3 class="img-info-title" v-text="item.title"></h3>
            <div class="img-info-cotent" v-text="item.zhaiyao"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.js";

export default {
  data() {
    return {
      imgCategory: [],
      images: []
    };
  },
  methods: {
    getImgCategory() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          this.imgCategory = result.body.message;
          this.imgCategory.unshift({
            title: "全部",
            id: 0
          });
          // console.log(result.body.message);
        } else {
          Toast("ERROR：加载imgCategory失败");
        }
      });
    },
    getImages(id = 0) {
      this.$http.get("api/getimages/" + id).then(result => {
        if (result.body.status === 0) {
          this.images = result.body.message;
        } else {
          Toast("ERROR：加载images失败");
        }
      });
    }
  },
  created() {
    this.getImgCategory();
    this.getImages();
  },
  mounted() {
    // 当此钩子函数执行的时候，我们才可以进行控件或插件的初始化工作；
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}

.photo-list {
  ul {
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    li {
      text-align: center;
      background-color: #ccc;
      margin-bottom: 10px;
      box-shadow: 0 0 9px #999;
      position: relative;

      img {
        width: 100%;
      }

      img[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
      }
      .img-info {
        position: absolute;
        bottom: 0;
        color: #fff;
        text-align: left;
        background-color: rgba(0, 0, 0, 0.5);
        max-height: 84px;
        overflow: hidden;

        .img-info-title {
          font-size: 14px;
        }

        .img-info-cotent {
          font-size: 13px;
        }
      }
    }
  }
}
</style>