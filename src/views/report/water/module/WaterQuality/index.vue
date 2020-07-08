<!-- 进水排水水质 -->
<template>
  <rect-box class="_WaterQuality_root">
    <div class="title-swapper">
      <span class="name">进水排水水质</span>
      <div class="legend-swapper">
        <div class="legend-item" v-for="(item, i) in myLegend" :key="`legend-${i}`">
          <div
            class="rect"
            :style="`background-image: linear-gradient(270deg, ${item.color[0]}, ${item.color[1]});opacity: ${item.opacity};`"
          ></div>
          <div class="name">{{item.name}}</div>
        </div>
        <span class="unit">单位:mg/L</span>
      </div>
    </div>
    <div class="chart-swapper">
      <div class="chart-item">
        <water-quality-bar :legend="myLegend" :data="list1" />
      </div>
      <div class="bar-line"></div>
      <div class="chart-item">
        <water-quality-bar :legend="myLegend" :data="list2" />
      </div>
    </div>
  </rect-box>
</template>

<script>
  import WaterQualityBar from '../../components/WaterQualityBar';

  export default {
    name: 'WaterQuality',
    data() {
      return {
        myLegend: [
          {
            name: '生活进水',
            color: ['#ff2300', '#ffb300'],
            opacity: 1,
          },
          {
            name: '工业进水',
            color: ['rgba(255,35,0,0.5)', 'rgba(255,179,0,0.5)'],
            opacity: 1,
          },
          {
            name: '排水',
            color: ['#005dff', '#0099ff'],
            opacity: 0.8,
          },
        ],
        myData: [ // value1 生活进水 value2 工业进水 value3 排水
          { name: 'COD', value1: 5.1, value2: 5.1, value3: 11.1 },
          { name: 'SS', value1: 4.9, value2: 4.9, value3: 10.9 },
          { name: 'TN', value1: 5.2, value2: 5.2, value3: 12.2 },
          { name: 'pH', value1: 4.3, value2: 4.3, value3: 9.3 },
          { name: 'NH3-N', value1: 5.6, value2: 5.6, value3: 14.6 },
          { name: 'TP', value1: 4.5, value2: 4.5, value3: 9.5 },
        ],
      };
    },
    computed: {
      list1() {
        if (!this.myData || !Array.isArray(this.myData)) return [];
        if (this.myData.length >= 3) {
          return this.myData.slice(0, 3);
        } else {
          return this.myData;
        }
      },
      list2() {
        if (!this.myData || !Array.isArray(this.myData) || this.myData.length <= 3) return [];
        if (this.myData.length >= 6) {
          return this.myData.slice(3, 6);
        } else {
          return this.myData.slice(3, this.myData.length);
        }
      },
    },
    components: {
      WaterQualityBar,
    },
  };
</script>

<style lang="scss" scoped>
  ._WaterQuality_root {
    position: relative;
    width: 100%;
    height: 278px;
    margin-top: 25px;
    padding-top: 15px;
    .title-swapper {
      width: 100%;
      height: 25px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      .name {
        font-size: 14px;
        color: #666666;
      }
      .legend-swapper {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .legend-item {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-left: 20px;
          .rect {
            width: 12px;
            height: 12px;
            background-image: linear-gradient(270deg, #ffb300, #ff2300);
            opacity: 1;
          }
          .name {
            margin-left: 10px;
            font-size: 12px;
            color: #666666;
            line-height: 1;
          }
        }
        .unit {
          margin-left: 20px;
          font-size: 12px;
          color: #999999;
        }
      }
    }
    .chart-swapper {
      position: relative;
      width: 100%;
      height: 215px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      .chart-item {
        width: 50%;
        height: 100%;
      }
      .bar-line {
        width: 1px;
        height: 95%;
        background-color: #e6e6e6;
      }
    }
  }
</style>
