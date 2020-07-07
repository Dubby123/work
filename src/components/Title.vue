<template>
  <div>
    <div class="title">{{title}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    title: String
  }
};
</script>
<style scoped lang='less'>
.title {
  font-size: 16px;
  color: #333333;
  &::before {
    display: inline-block;
    content: "";
    width: 4px;
    height: 16px;
    background-color: #0066ff;
    border-radius: 2px;
    margin-right: 12px;
    position: relative;
    top:2px
  }
  &::after {
    display: inline-block;
    content: "";
    width: 90%;
    height: 0px;
    border: dotted 1px #cccccc;
  }
}
</style>>