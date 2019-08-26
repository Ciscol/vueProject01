<template>
  <div>
    <comment :id="id" :postUrl="postUrl" :getUrl="getUrl"></comment>
  </div>
</template>

<script>
import CommentBox from "../subcomponents/Comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      postUrl: "api/postcomment/",
      getUrl: "api/getcomments/"
    };
  },
  components: {
    comment: CommentBox
  }
};
</script>

<style lang="scss" scoped>
</style>