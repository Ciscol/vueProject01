<template>
  <div class="comment-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入" v-model="commentContent"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, index) in commentList" :key="index">
        <div class="cmt-title" v-cloak>
          第{{index+1}}楼&nbsp;&nbsp;
          用户：{{item.user_name}}&nbsp;&nbsp;
          发表时间：{{item.add_time | dateFormat}}
        </div>
        <div class="cmt-body">{{item.content || 'null'}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getComments">加载更多</mt-button>
  </div>
</template>


<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 0,
      commentList: [],
      commentContent: ""
    };
  },
  methods: {
    getComments() {
      this.pageIndex++;
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
            this.commentList = [].concat(this.commentList, result.body.message);
            // console.log(this.commentList);
          } else {
            Toast("已全部加载");
          }
        });
    },
    postComment() {
      if (this.commentContent.trim() === "") {
        return Toast("无法评论空白内容");
      }

      this.$http
        .post("api/postcomment/" + this.id, {
          content: this.commentContent.trim()
        })
        .then(result => {
          if (result.body.status === 0) {
            Toast("发表评论成功");
            var cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.commentContent.trim()
            };

            this.commentList.unshift(cmt)
            this.commentList.pop();
          } else {
            Toast("ERROR：发表评论失败");
          }
        });
    }
  },
  props: ["id"],
  created() {
    this.getComments();
  }
};
</script>
<style lang="scss" scoped>
.comment-container {
  h3 {
    font-size: 18px;
  }

  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
}

.cmt-list {
  margin: 10px 0;
  .cmt-item {
    font-size: 13px;
    .cmt-title {
      background-color: #ccc;
      line-height: 30px;
    }
    .cmt-body {
      text-indent: 2em;
      line-height: 35px;
      word-wrap: break-word;
    }
  }
}
</style>
