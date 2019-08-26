<template>
  <div class="goodsdesc-container">
    <h1 v-text="goodsDesc.title"></h1>
    <hr />
    <div class="content" v-html="goodsDesc.content"></div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      id: this.$route.params.id,
      goodsDesc: {}
    };
  },
  methods: {
    getGoodsDesc() {
      this.$http.get("api/goods/getdesc/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.goodsDesc = result.body.message[0];
          console.log(this.goodsDesc);
        } else {
          Toast("ERROR");
        }
      });
    }
  },
  created() {
    this.getGoodsDesc();
  }
};
</script>

<style lang="scss" >
.goodsdesc-container {
  background-color: #fff;
  padding: 4px;
  h1 {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content {
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>