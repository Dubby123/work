<!-- RectBox -->
<template>
  <div class="_RectBox_root">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'RectBox',
  };
</script>

<style lang="scss" scoped>
  ._RectBox_root {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    border-radius: 4px;
  }
</style>
