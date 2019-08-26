<template>
  <div class="photoinfo-container">
    <h1 v-cloak>{{photoinfo.title}}</h1>
    <div class="ellipsis">
      <div>
        <span>发表时间：</span>
        <span v-cloak>{{photoinfo.add_time | dateFormat('YYYY-MM-DD HH:mm:ss')}}</span>
      </div>
      <div>
        <span>点击：</span>
        <span v-cloak>{{photoinfo.click}}次</span>
      </div>
    </div>

    <image-preview :id="id" :getUrl="'api/getthumimages/'"></image-preview>

    <div class="photoinfo-content" v-html="photoinfo.content"></div>

    <comment-box :id="id" :postUrl="'api/postcomment/'" :getUrl="'api/getcomments/'"></comment-box>
  </div>
</template>

<script>
import CommentBox from "../subcomponents/Comment.vue";
import ImagePreview from "../subcomponents/ImagePreview.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {
        title: "很美的落地大叔贵",
        add_time: Date.now(),
        click: 0,
        content: "123123132132131231322311"
      }
    };
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.photoinfo = result.body.message[0];
          // console.log(this.photoinfo);
        } else {
          Toast("ERROR：加载photoInfo失败");
        }
      });
    }
  },
  components: {
    "comment-box": CommentBox,
    "image-preview": ImagePreview
  },
  created() {
    this.getPhotoInfo();
  }
};
</script>

<style lang="scss" scoped>
.photoinfo-container {
  padding: 0 10px;

  h1 {
    font-size: 15px;
    margin: 15px 0;
    text-align: center;
    color: #26a2ff;
  }

  .ellipsis {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: rgb(90, 90, 90);
    border-bottom: 2px rgb(189, 185, 185) solid;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }

  .photoinfo-content {
    font-size: 13px;
    line-height: 30px;
  }
}
</style>