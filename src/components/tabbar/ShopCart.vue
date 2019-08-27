<template>
  <div class="shoppingcart-container">
    <div class="selected-goods">
      <div class="mui-card" v-for="(item, index) in $store.state.cart" :key="index">
        <div class="mui-card-content">
          <div class="switchPanel">
            <mt-switch
              v-model="$store.getters.selectionList[item.id]"
              class="switch"
              @change="switchSelection(item.id)"
            ></mt-switch>
          </div>
          <div class="imagePanel">
            <img :src="item.img_url" alt @click="goGoodsInfo(item.id)" />
          </div>
          <div class="operationPanel">
            <div class="title">
              <h3 v-text="item.title" @click="goGoodsInfo(item.id)"></h3>
            </div>
            <div class="orderInfo">
              <span class="goods-price" v-cloak>￥{{item.price}}</span>
              <num-box :max="parseInt(item.max)" :id="item.id" :initCount="item.count"></num-box>
              <mt-button type="danger" size="small" @click="deleteGoods(item.id)">删除</mt-button>
            </div>
          </div>
        </div>
      </div>

      <div class="goods-check">
        <div class="mui-card">
          <div class="mui-card-content">
            <div class="left">
              <p>总计&nbsp;（不含运费）</p>
              <p>
                已勾选商品
                <span>{{$store.getters.selectedCount.count}}</span>件，总价：
                <span>￥{{$store.getters.selectedCount.amount}}</span>
              </p>
            </div>
            <div class="right">
              <mt-button type="danger" size="normal">去结算</mt-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Numbox from "../subcomponents/shopCart-numbox.vue";
export default {
  data() {
    return {};
  },
  methods: {
    deleteGoods(id) {
      this.$store.commit("deleteToCart", id);
    },
    switchSelection(id) {
      this.$store.commit("switchSelection", id);
    },
    goGoodsInfo(id) {
      this.$router.push({ name: "goodsInfo", params: { id } });
    }
  },
  components: {
    "num-box": Numbox
  }
};
</script>

<style lang="scss" scoped>
.shoppingcart-container {
  background-color: #fff;
  overflow: hidden;

  .selected-goods {
    background-color: #eee;
    .mui-card-content {
      display: flex;
      justify-content: center;
      padding: 10px;

      .switchPanel {
        position: relative;
        .switch {
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }

      .imagePanel {
        img {
          margin: 5px;
          height: 50px;
          width: 50px;
        }
      }

      .operationPanel {
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h3 {
          font-size: 13px;
        }

        .orderInfo {
          display: flex;
          justify-content: space-between;

          .goods-price {
            color: red;
            font-weight: bold;
          }

          .goods-delete {
            width: 50px;
            height: 25px;
          }
        }
      }
    }
  }

  .goods-check {
    padding: 1px 0;
    background-color: #fff;
    .mui-card-content {
      justify-content: space-between;

      .left {
        p {
          font-size: 15px;
        }
        span {
          font-size: 18px;
          font-weight: bold;
          color: red;
        }
      }

      .right {
        position: relative;
        button {
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}
</style>