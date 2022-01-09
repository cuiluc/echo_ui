<template>
  <div class="echo_ui_button_wrapper">
    <div class="echo_ui_button" :style="{ color: color }" @click="handler">
      {{ text }}
    </div>
  </div>
</template>
<script>
export default {
  name: "EchoUiButton",
  props: {
    color: {
      default: "blue",
      type: String,
    },
    text: {
      default: "开始",
      type: String,
    },
  },
  methods: {
    async handler() {
      await this.$emit("EchoClick");
      console.log("EchoUiButton is work", this.text?.a?.b);
    },
  },
};
</script>
<style lang="less">
.echo_ui_button_wrapper {
  display: inline-block;
  .echo_ui_button {
    display: inline-block;
    border: 1px solid #ddd;
    padding: 0 12px;
    line-height: 32px;
    font-size: 16px;
  }
}









</style>
