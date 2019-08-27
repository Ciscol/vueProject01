<template>
  <div class="goodsinfo-container">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballShow" ref="ball"></div>
    </transition>
    <div class="mui-card">
      <div class="mui-card-content">
        <swiper-box :swiperList="swiperList" :srcName="'src'"></swiper-box>
      </div>
    </div>

    <div class="mui-card goods-buying">
      <div class="mui-card-header" v-cloak>{{goodsInfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="goods-price">
            <span>市场价&nbsp;：</span>
            <span class="goods-market-price" v-cloak>￥{{goodsInfo.market_price}}</span>
            <span>&nbsp;&nbsp;销售价&nbsp;：</span>
            <span class="goods-sell-price" v-cloak>￥{{goodsInfo.sell_price}}</span>
          </div>
          <div class="goods-buycount">
            <span>购买数量：</span>
            <numbox @getCount="getSelectedCount" :max="goodsInfo.stock_quantity"></numbox>
          </div>
          <div class="goods-behaviors">
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShoppingCart">加入购物车</mt-button>
          </div>
        </div>
      </div>
    </div>

    <div class="mui-card goods-params">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="goods-number">
            <span>商品货号&nbsp;：</span>
            <span v-cloak>{{goodsInfo.goods_no}}</span>
          </div>
          <div class="goods-stock">
            <span>库存情况&nbsp;：</span>
            <span v-cloak>{{goodsInfo.stock_quantity}}件</span>
          </div>
          <div class="goods-upt">
            <span>上架时间&nbsp;：</span>
            <span v-cloak>{{goodsInfo.add_time | dateFormat}}</span>
          </div>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment">商品评论</mt-button>
        <div style="clear:both"></div>
      </div>
    </div>
  </div>
</template>


<script>
import { Toast } from "mint-ui";
import SwiperBox from "../subcomponents/Swiper.vue";
import NumBox from "../subcomponents/goodsinfo-numbox.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      swiperList: [],
      goodsInfo: {},
      ballShow: false,
      selectedCount: 1
    };
  },
  methods: {
    getSwiperList() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.swiperList = result.body.message;
        } else {
          Toast("ERROR：加载GoodsImages失败");
        }
      });
    },
    getGoodsInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.goodsInfo = result.body.message[0];
          // console.log(this.goodsInfo);
        } else {
          Toast("ERROR：加载GoodsInfo失败");
        }
      });
    },
    goDesc() {
      this.$router.push({ name: "goodsDesc", params: { id: this.id } });
    },
    goComment() {
      this.$router.push({ name: "goodsComment", params: { id: this.id } });
    },
    addToShoppingCart() {
      this.ballShow = true;
      var info = {
        id: this.id,
        img_url: this.swiperList[0].src,
        title: this.goodsInfo.title,
        count: this.selectedCount,
        price: this.goodsInfo.sell_price,
        selected: false,
        max: this.goodsInfo.stock_quantity
      };
      this.$store.commit("addToCart", info);
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;

      const pBall = this.$refs.ball.getBoundingClientRect();
      const pBadge = document.getElementById("badge").getBoundingClientRect();
      const distX = pBadge.left - pBall.left;
      const distY = pBadge.top - pBall.top;

      el.style.transform = `translate(${distX}px, ${distY}px)`;
      el.style.transition = "all 0.5s cubic-bezier(0.6,-0.3,1,0.68)";
      done();
    },
    afterEnter(el) {
      this.ballShow = false;
    },
    getSelectedCount(count) {
      this.selectedCount = count;
    }
  },
  components: {
    "swiper-box": SwiperBox,
    numbox: NumBox
  },
  created() {
    this.getSwiperList();
    this.getGoodsInfo();
  }
};
</script>


<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
  position: relative;
  .ball {
    z-index: 100;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top: 330px;
    left: 152px;
  }
  .goods-buying {
    .mui-card-content-inner {
      line-height: 35px;
      margin: 5px 0;

      .goods-price {
        .goods-market-price {
          text-decoration: line-through;
          font-size: 12px;
        }

        .goods-sell-price {
          color: red;
          font-size: 16px;
        }
      }

      .goods-buycount {
      }
      .goods-behaviors {
        margin-top: 5px;
      }
    }
  }
}

.goods-params {
  .mui-card-content-inner {
    line-height: 35px;
    color: #777;
  }
  .mui-card-footer {
    display: block;

    button {
      float: left;
      margin: 10px 0;
    }
  }
}
</style>