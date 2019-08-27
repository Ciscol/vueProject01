<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item, index) in newsList" :key="index">
        <router-link :to="'/home/newsInfo/'+item.id">
          <div class="mui-media-object mui-pull-left mui-media-box">
            <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          </div>
          <div class="mui-media-body">
            <h1 v-text="item.title"></h1>
            <div class="mui-ellipsis">
              <div>
                <span>发表时间：</span>
                <span v-cloak>{{item.add_time | dateFormat('YYYY-MM-DD HH:mm:ss')}}</span>
              </div>
              <div>
                <span>点击：</span>
                <span v-text="item.click+'次'"></span>
              </div>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  // 刚好写到数据获取这里，获取数据还有问题

  data() {
    return {
      newsList: []
    };
  },
  methods: {
    getNewsList() {
      this.$http.get("api/getnewslist").then(result => {
        if (result.body.status === 0) {
          this.newsList = result.body.message;
          // console.log(result.body.message);
        } else {
          Toast("ERROR：加载newsList失败");
        }
      });
    }
  },
  created() {
    this.getNewsList();
  }
};
</script>

<style scoped>
.mui-media-body h1 {
  font-size: 14px;
}
.mui-ellipsis {
  font-size: 12px;
  color: #226aff;
  display: flex;
  justify-content: space-between;
}
.mui-media-object.mui-pull-left.mui-media-box {
  width: 42px;
  height: 42px;
  margin-right: 10px;
  background-color: rgb(199, 198, 198);
}
</style>