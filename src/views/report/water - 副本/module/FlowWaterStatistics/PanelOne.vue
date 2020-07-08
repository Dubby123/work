<!-- PanelOne -->
<template>
  <rect-box class="_PanelOne_root">
    <water-statistics :data="myData1" />
    <div class="chart">
      <water-line-chart />
    </div>
    <water-statistics class="item-last" :data="myData2" />
  </rect-box>
</template>

<script>
import WaterStatistics from '../../components/WaterStatistics'
import WaterLineChart from '../../components/WaterLineChart'
import icon1 from "../../components/icon/icon-1-1.png";
import icon2 from "../../components/icon/icon-1-2.png";

export default {
  name: 'PanelOne',
  components: {
    WaterStatistics,
    WaterLineChart,
  },
  data() {
    return {
      myData1: {
        icon: icon1,
        name: '当日累计进水总量',
        value: 321256,
        unit: '㎡',
        rate: -8,
      },
      myData2: {
        icon: icon2,
        name: '当日累计排水总量',
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

    .chart {
      margin-top: 30px;
      width: 100%;
      height: 200px;
    }

    .item-last {
      align-self: flex-end;
    }
  }
</style>
