<!-- 小标题 -->
<template>
  <div class="_SubTitle_root">
    <div class="name">{{name}}</div>
    <div class="line"></div>
  </div>
</template>

<script>
  export default {
    name: 'SubTitle',
    props: {
      name: String,
    },
  };
</script>

<style lang="scss" scoped>
  ._SubTitle_root {
    position: relative;
    width: 100%;
    height: 22px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    margin-top: 15px;
    &:before {
      content: ' ';
      position: absolute;
      left: 0;
      width: 4px;
      height: 16px;
      background-color: #0066ff;
      border-radius: 2px;
    }
    .name {
      height: 100%;
      padding-right: 20px;
      font-size: 16px;
      color: #333333;
      display: flex;
      align-items: center;
    }
    .line {
      flex: 1;
      height: 1px;
      background-image: linear-gradient(to right, #ccc 0%, #ccc 50%, transparent 50%);
      background-size: 12px 1px;
      background-repeat: repeat-x;
    }
  }
</style>
