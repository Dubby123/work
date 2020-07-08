<!-- PanelOne -->
<template>
  <rect-box class="_PanelOne_root">
    <quality-analysis-pie :name="name" :data="myData" />
  </rect-box>
</template>

<script>
import QualityAnalysisPie from '../../components/QualityAnalysisPie';

export default {
  name: 'PanelOne',
  data() {
    return {
      name: '进水来源分析',
      myData: [
        {
          name: '生活污水',
          value: 25,
          child: [
            { name: '生活污水市排1400', value: 8 },
            { name: '生活污水新齐贤泵站', value: 8 },
            { name: '生活污水安滨1600', value: 9 },
          ],
        },
        {
          name: '工业污水',
          value: 75,
          child: [
            { name: '工业污水市排', value: 40 },
            { name: '工业污水区排', value: 35 },
          ],
        },
      ],
    };
  },
  components: {
    QualityAnalysisPie,
  },
};
</script>

<style lang="scss" scoped>
  ._PanelOne_root {
    position: relative;
    width: 393px;
    height: 360px;
  }
</style>
