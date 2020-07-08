<!-- PanelOne -->
<template>
  <rect-box class="_PanelOne_root">
    <water-statistics :data="myData1" />
    <water-statistics :data="myData2" />
    <water-statistics class="item-last" :data="myData3" />
  </rect-box>
</template>

<script>
import WaterStatistics from '../../components/WaterStatistics'
import icon1 from "../../components/icon/icon-3-1.png";
import icon2 from "../../components/icon/icon-3-2.png";
import icon3 from "../../components/icon/icon-3-3.png";

export default {
  name: 'PanelOne',
  components: {
    WaterStatistics,
  },
  data() {
    return {
      myData1: {
        icon: icon1,
        name: '当月工业污水合计进水量',
        value: 93041,
        unit: '㎡',
        rate: -8,
        other: [
          {
            name: '20T进水量',
            num: '33,039',
          },
          {
            name: '40T进水量',
            num: '30,001',
          },
        ],
      },
      myData2: {
        icon: icon2,
        name: '当月工业污水合计处理水量',
        value: 93041,
        rate: -8,
        other: [
          {
            name: '20T处理水量',
            num: '33,039',
          },
          {
            name: '40T进水量',
            num: '30,001',
          },
        ],
      },
      myData3: {
        icon: icon3,
        name: '当月工业污水排水总量',
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
