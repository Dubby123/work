<!-- 进水排水水质 -->
<template>
  <rect-box class="_WaterQuality_root">
    <div class="title-swapper">
      <span class="name">进水排水水质</span>
      <div class="legend-swapper">
        <span>2020-03</span>
        <span class="unit">单位:mg/L</span>
      </div>
    </div>
    <div class="chart-swapper">
      <div class="chart-item">
        <water-quality-bar-one  :data="list1" />
      </div>
      <div class="bar-line"></div>
      <div class="chart-item">
        <water-quality-bar-one  :data="list2" />
      </div>
    </div>
  </rect-box>
</template>

<script>
  import WaterQualityBarOne from '../../components/WaterQualityBarOne';

  export default {
    name: 'WaterQuality',
    data() {
      return {
        // ],
        myData: [ // value1 生活进水 value2 出水 
          { name: 'COD', value1: 5.1, value2: 5.1,  },
          { name: 'SS', value1: 4.9, value2: 4.9,  },
          { name: 'TN', value1: 5.2, value2: 5.2, },
          { name: 'pH', value1: 4.3, value2: 4.3,  },
          { name: 'NH3-N', value1: 5.6, value2: 5.6,  },
          { name: 'TP', value1: 4.5, value2: 4.5,  },
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
      WaterQualityBarOne,
    },
  };
</script>

<style lang="less" scoped>
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
