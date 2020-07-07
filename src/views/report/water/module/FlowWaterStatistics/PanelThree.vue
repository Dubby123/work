<!-- PanelOne -->
<template>
  <rect-box class="_PanelOne_root">
    <water-statistics />
  </rect-box>
</template>

<script>
import WaterStatistics from '../../components/WaterStatistics'

export default {
  name: 'PanelOne',
  components: {
    WaterStatistics,
  },
};
</script>

<style lang="scss" scoped>
  ._PanelOne_root {
    position: relative;
    width: 393px;
    height: 444px;
    padding-top: 20px;
  }
</style>
