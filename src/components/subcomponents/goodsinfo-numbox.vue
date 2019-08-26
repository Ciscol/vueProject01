<template>
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      value="1"
      @change="postCount"
      ref="selectedCount"
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.js";

export default {
  data() {
    return {
      selectedCount: 1
    };
  },
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    postCount() {
      this.$emit("getCount", parseInt(this.$refs.selectedCount.value));
    }
  },
  props: ["max"],
  watch: {
    max: function(newval, oldval) {
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newval);
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-numbox {
  height: 25px;
  input {
    display: block;
    font-size: 16px;
  }
}
</style>