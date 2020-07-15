<!-- PanelOne -->
<template>
  <rect-box class="_PanelOne_root">
    <title-panel :data="myData1" />
    <title-panel class="item-last" :data="myData2" />
  </rect-box>
</template>

<script>
import TitlePanel from '../../../components/TitlePanel'
import icon1 from "../../components/icon/icon-2-1.png";
import icon2 from "../../components/icon/icon-2-2.png";

export default {
  name: 'PanelOne',
  components: {
    TitlePanel,
  },
  data() {
    return {
      myData1: {
        icon: icon1,
        name: '生活污水合计进水量',
        value: 93041,
        unit: '㎡',
        rate: -8,
        other: [
          {
            name: '市排1400进水量',
            num: '33,039',
          },
          {
            name: '新齐贤泵站',
            num: '30,001',
          },
          {
            name: '安彬1600',
            num: '33,039',
          },
        ],
      },
      myData2: {
        icon: icon2,
        name: '生活污水排水总量',
        value: 256256,
        rate: 8,
      },
    };
  },
};
</script>

<style lang="less" scoped>
  ._PanelOne_root {
    position: relative;
    width: 393px;
    height: 444px;
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
    .item-last {
      align-self: flex-end;
    }
  }
</style>
