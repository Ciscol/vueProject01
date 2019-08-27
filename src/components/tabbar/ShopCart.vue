<template>
  <div class="shoppingcart-container">
    <div class="selected-goods">
      <div class="mui-card" v-for="(item, index) in $store.state.cart" :key="index">
        <div class="mui-card-content">
          <div class="switchPanel">
            <mt-switch v-model="item.selected" class="switch"></mt-switch>
          </div>
          <div class="imagePanel">
            <img :src="item.img_url" alt />
          </div>
          <div class="operationPanel">
            <div class="title">
              <h3 v-text="item.title"></h3>
            </div>
            <div class="orderInfo">
              <span class="goods-price" v-cloak>￥{{item.price}}</span>
              <num-box :max="parseInt(item.max)" :id="item.id"></num-box>
              <mt-button type="danger" size="small" class="goods-delete">删除</mt-button>
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
  methods: {},
  components: {
    "num-box": Numbox
  }
};
</script>

<style lang="scss" scoped>
.shoppingcart-container {
  background-color: #eee;
  overflow: hidden;

  .selected-goods {
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

          .goods-delete{
            width: 50px;
            height: 25px;
          }
        }
      }
    }
  }
}
</style>