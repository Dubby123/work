<!-- 流量水质统计 -->
<template>
  <div class="_FlowWaterStatistics_root">
    <sub-title name="流量水质统计" />
    <div class="content">
      <panel-one class="item-swapper" />
      <panel-two class="item-swapper" />
      <panel-three class="item-swapper" />
    </div>
     <water-quality/>
     <inlet-analysis/>
  </div>
</template>

<script>
  import PanelOne from './PanelOne'
  import PanelTwo from './PanelTwo'
  import PanelThree from './PanelThree'
  import WaterQuality from './WaterQuality'
   import InletAnalysis from './InletAnalysis'
  export default {
    name: 'FlowWaterStatistics',
    components: {
      PanelOne,
      PanelTwo,
      PanelThree,
      WaterQuality,
      InletAnalysis
    },
  };
</script>

<style lang="less" scoped>
  ._FlowWaterStatistics_root {
    position: relative;
    .content {
      margin-top: 20px;
      width: 100%;
      height: 444px;
      display: flex;
      justify-content: space-between;
      .item-swapper {
        width: 33%;
      }
    }
  }
</style>
