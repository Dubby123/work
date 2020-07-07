<template>
  <div class="water-root">
    <flow-water-statistics />
    <water-quality />
    <quality-analysis />
  </div>
</template>
<script>
import FlowWaterStatistics from './module/FlowWaterStatistics';
import WaterQuality from './module/WaterQuality';
import QualityAnalysis from './module/QualityAnalysis';

export default {
  data() {
    return {}
  },
  components: {
    FlowWaterStatistics,
    WaterQuality,
    QualityAnalysis,
  },
}
</script>
<style scoped lang="scss">
  .water-root {
    position: relative;
    width: 100%;
  }
</style>
