<template>
  <div class="water-root">
    <flow-water-statistics />
    <water-quality />
  </div>
</template>
<script>
import FlowWaterStatistics from './module/FlowWaterStatistics';
import WaterQuality from './module/WaterQuality';

export default {
  data() {
    return {}
  },
  components: {
    FlowWaterStatistics,
    WaterQuality,
  },
}
</script>
<style scoped lang="scss">
  .water-root {
    position: relative;
    width: 100%;
  }
</style>
