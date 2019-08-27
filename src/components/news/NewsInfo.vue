<template>
  <div class="newsinfo-container">
    <h1 v-cloak>{{newsInfo.title}}</h1>
    <div class="ellipsis">
      <div>
        <span>发表时间：</span>
        <span v-cloak>{{newsInfo.add_time | dateFormat('YYYY-MM-DD HH:mm:ss')}}</span>
      </div>
      <div>
        <span>点击：</span>
        <span v-cloak>{{newsInfo.click}}次</span>
      </div>
    </div>
    <div class="newsinfo-content" v-html="newsInfo.content"></div>

    <comment-box :id="id" :postUrl="'api/postcomment/'" :getUrl="'api/getcomments/'"></comment-box>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import CommentBox from "../subcomponents/Comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      newsInfo: {}
    };
  },
  methods: {
    getNewsInfo() {
      this.$http.get("api/getnew/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.newsInfo = result.body.message[0];
          // console.log(this.newsInfo);
        } else {
          Toast("ERROR：加载newsInfo失败");
        }
      });
    }
  },
  components: {
    "comment-box": CommentBox
  },
  created() {
    this.getNewsInfo();
  }
};
</script>

<style scoped>
.newsinfo-container {
  padding: 0 10px;
}
.newsinfo-container h1 {
  font-size: 16px;
  margin: 15px 0;
  text-align: center;
  color: red;
}

.newsinfo-container .ellipsis {
  display: flex;
  justify-content: space-between;
  font-size: 14x;
  color: #226aff;
  border-bottom: 2px rgb(189, 185, 185) solid;
  margin-bottom: 10px;
  padding-bottom: 10px;
}
</style>