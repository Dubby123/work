<!-- 流量水质分析 -->
<template>
  <div class="_QualityAnalysis_root">
    <sub-title name="流量水质分析" />
    <div class="content">
      <panel-one class="panel-one" />
      <panel-two class="panel-two" />
    </div>
  </div>
</template>

<script>
  import PanelOne from './PanelOne'
  import PanelTwo from './PanelTwo'

  export default {
    name: 'QualityAnalysis',
    components: {
      PanelOne,
      PanelTwo,
    },
  };
</script>

<style lang="less" scoped>
  ._QualityAnalysis_root {
    position: relative;
    .content {
      margin-top: 20px;
      width: 100%;
      height: 444px;
      display: flex;
      justify-content: space-between;
      .panel-one {
        width: 33%;
      }
      .panel-two {
        width: 66%;
      }
    }
  }
</style>
