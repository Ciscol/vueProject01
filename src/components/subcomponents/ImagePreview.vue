<template>
  <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
</template>
 
<script>
export default {
  data() {
    return {
      slide1: []
    };
  },
  methods: {
    handleClose() {
      console.log("close event");
    },
    getImages() {
      this.$http.get(this.getUrl + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(item => {
            item.msrc = item.src;
            // item.msrc = "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg";
            item.w = 400;
            item.h = 400;
          });
          this.slide1 = result.body.message;
          console.log(this.slide1);
        } else {
          Toast("ERROR：加载photoInfo失败");
        }
      });
    }
  },
  created() {
    this.getImages();
  },
  props: ["id", "getUrl"]
};
</script> 