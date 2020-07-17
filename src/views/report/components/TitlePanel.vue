<!-- WaterStatistics -->
<template>
  <div class="_TitlePanel_root">
    <div class="index-swapper">
      <div class="icon">
        <img :src="(data && data.icon) || defaultIcon" alt="icon">
      </div>
      <div class="index-div">
        <div class="name">{{data && data.name}}</div>
        <div class="value">{{data && data.value}}</div>
      </div>
      <div class="rate-div">
        <div class="unit">单位：{{data && data.unit}}</div>
        <div class="rate">
          <span class="name">同比</span>
          <span class="num">{{data && Math.abs(data.rate)}}%</span>
          <img v-if="data && data.rate < 0" src="./icon/down.png" alt="down">
          <img v-else src="./icon/up.png" alt="up">
        </div>
      </div>
    </div>
    <div class="other-swapper" v-if="data && Array.isArray(data.other)">
      <div class="m-item" v-for="(item, index) in data.other" :key="item.name+index">
        <div class="name">{{ item.name }}</div>
        <div class="num">{{ item.num }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import defaultIcon from './icon/icon-1-1.png';
  export default {
    name: 'WaterStatistics',
    props: {
      data: {
        type: Object,
        default: () => ({
          icon: defaultIcon,
          name: '当日累计进水总量',
          value: 321256,
          unit: '㎡',
          rate: 8,
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
        })
      },
    },
    data() {
      return {
        defaultIcon,
      };
    },
  };
</script>

<style lang="less" scoped>
  ._TitlePanel_root {
    position: relative;
    width: 100%;
    .index-swapper {
      position: relative;
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      .icon {
        width: 50px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        >img {
          max-width: 100%;
          max-height: 100%;
        }
      }
      .index-div {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 15px;
        max-width: 155px;
        .name {
          font-size: 14px;
          color: #666666;
          text-align: left;
          white-space: nowrap;
        }

        .value {
          font-size: 24px;
          color: #333333;
          text-align: left;
          white-space: nowrap;
        }
      }
      .rate-div {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        .unit {
          width: 100%;
          font-size: 12px;
          color: #999999;
          text-align: right;
        }
        .rate {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          line-height: 1;
          white-space: nowrap;
          .name {
            font-size: 12px;
            color: #666666;
            margin-right: 5px;
          }
          .num {
            font-size: 24px;
            color: #ff5656;
            margin-right: 5px;
            margin-bottom: -2px;
          }
        }
      }
    }
    .other-swapper {
      padding-left: 75px;
      display: flex;
      flex-wrap: wrap;
      .m-item {
        min-width: 45%;
        color: #666666;
        text-align: left;
        margin-top: 25px;
        .name {
          font-size: 14px;
          margin-bottom: 13px;
        }
        .num {
          font-size: 24px;
        }
      }
    }
  }
</style>
