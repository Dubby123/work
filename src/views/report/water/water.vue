<template>
  <div class="water-root">
    <flow-water-statistics />
    <water-quality />
    <quality-analysis />
    <inlet-analysis />
  </div>
</template>
<script>
import FlowWaterStatistics from './module/FlowWaterStatistics';
import WaterQuality from './module/WaterQuality';
import QualityAnalysis from './module/QualityAnalysis';
import InletAnalysis from './module/InletAnalysis';

export default {
  data() {
    return {}
  },
  components: {
    FlowWaterStatistics,
    WaterQuality,
    QualityAnalysis,
    InletAnalysis,
  },
}
</script>
<style scoped lang="scss">
  .water-root {
    position: relative;
    width: 100%;
  }
</style>
