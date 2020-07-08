<!-- PanelTwo -->
<template>
  <rect-box class="_PanelTwo_root">
    <quality-analysis-pie :name="name" :data="myData" :color-index="1" />
  </rect-box>
</template>

<script>

import QualityAnalysisPie from "../../components/QualityAnalysisPie";

export default {
  name: 'PanelTwo',
  data() {
    return {
      name: '工业污水进水分析',
      myData: [
        {
          name: '工业污水市排',
          value: 34,
          child: [
            { name: '袍江(一期)', value: 8 },
            { name: '袍江(二期)', value: 8 },
            { name: '新马海', value: 9 },
            { name: '滨海水务', value: 9 },
          ],
        },
        {
          name: '工业污水区排',
          value: 64,
          child: [
            { name: '马鞍泵站', value: 10 },
            { name: '柯海800', value: 8 },
            { name: '齐贤镇排', value: 8 },
            { name: '齐马(一期)', value: 8 },
            { name: '天马', value: 8 },
            { name: '滨海1#线', value: 6 },
            { name: '滨海2#线', value: 6 },
            { name: '滨海3#线', value: 5 },
            { name: '新滨海1#线', value: 4 },
            { name: '新滨海2#线', value: 3 },
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
  ._PanelTwo_root {
    position: relative;
    width: 791px;
    height: 360px;
  }
</style>
