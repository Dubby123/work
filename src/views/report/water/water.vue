<template>
  <div class="water-root">
    <!--    <water-top />-->
    <flow-water-statistics />
  </div>
</template>
<script>
import FlowWaterStatistics from './module/FlowWaterStatistics';
// import waterTop from './components/waterTop';

export default {
  data() {
    return {}
  },
  components: {
    FlowWaterStatistics,
    // waterTop,
  },
}
</script>
<style scoped lang="scss">
  .water-root {
    position: relative;
    width: 100%;
  }
</style>
