<template>
  <div class="goods-list">
    <div
      class="goods-item"
      v-for="(item, index) in goodsList"
      :key="index"
      @click="goDetails(item.id)"
    >
      <div class="goods-img">
        <img v-lazy="item.img_url" />
      </div>
      <div class="goods-info">
        <div class="goods-title">
          <h3 v-text="item.title"></h3>
        </div>
        <div class="goods-subinfo">
          <div class="goods-price">
            <span class="goods-price-new" v-cloak>￥{{item.sell_price}}</span>
            <span class="goods-price-old" v-cloak>￥{{item.market_price}}</span>
          </div>
          <div class="goods-selling">
            <span>热卖中</span>
            <span v-cloak>剩{{item.stock_quantity}}件</span>
          </div>
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="getGoods">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      goodsList: [],
      pageIndex: 0
    };
  },
  methods: {
    getGoods() {
      this.pageIndex++;
      this.$http
        .get("api/getgoods?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
            this.goodsList = this.goodsList.concat(result.body.message);
            // console.log(result.body.message);
          } else {
            Toast("ERROR：加载goodsList失败");
          }
        });
    },
    goDetails(id) {
      this.$router.push("/home/goodsInfo/" + id);
    }
  },
  created() {
    this.getGoods();
  }
};
</script>



<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  margin: 7px;
  justify-content: space-between;

  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    margin-bottom: 8px;
    padding: 2px;
    box-shadow: 0 0 8px #ccc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;

    .goods-img {
      img {
        width: 100%;
      }
      img[lazy="loading"] {
        width: 100%;
        height: 180px;
        margin: auto;
        background-color: #ccc;
      }
    }
    .goods-info {
      .goods-title {
        margin-left: 8px;
        word-wrap: break-word;

        h3 {
          font-size: 14px;
        }
      }

      .goods-subinfo {
        background-color: #eee;
        padding: 5px 8px;
        .goods-price {
          .goods-price-new {
            font-size: 16px;
            font-weight: bold;
            color: red;
          }
          .goods-price-old {
            text-decoration: line-through;
            font-size: 12px;
            margin-left: 10px;
          }
        }
        .goods-selling {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
        }
      }
    }
  }
}
</style>