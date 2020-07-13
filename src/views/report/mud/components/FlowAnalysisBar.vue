<!-- QualityAnalysisPie -->
<template>
  <div class="_FlowAnalysisBar_root">
    <div class="chart-root" ref="chart_dom"></div>
  </div>
</template>
<script>
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";
export default {
  name: "FlowAnalysisBar",
  props: {
    data: {
      type: Array,
      default: () => [
        {
          name: "新区",
          value: [220, 290, 330, 310, 182, 191, 234]
        },
        {
          name: "老区",
          value: [220, 182, 191, 234, 290, 330, 310]
        }
      ]
    },
    color: {
      type: Array,
      default: () => ["#6fbcf8", "#ffc785"]
    },
    title: {
      type: String,
      default: "回流废水流量"
    }
  },
  data() {
    return {
      chart: null,
      name: ""
    };
  },
  watch: {
    data() {
      this.upData();
    }
  },
  mounted() {
    this.upData();
  },
  methods: {
    initChart() {
      if (!this.chart) {
        this.chart = echarts.init(this.$refs.chart_dom);
      }
    },
    upData() {
      this.initChart();
      if (!this.data || !Array.isArray(this.data)) return;
      const Xdata = [...Array(31).keys()].slice(1);
      const option = {
        tooltip: {
          trigger: "axis",
          backgroundColor: "#FFF",
          axisPointer: {
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          },
          textStyle: {
            color: "#666666",
            fontSize: "12px",
            lineHeight: 56
          },
          formatter: function(params) {
            var res = "";
            for (var i = 0, l = params.length; i < l; i++) {
              res += `<div><span style="display:inline-block;margin-right:10px;width:10px;height:10px;background-color:${params[i].color}"></span><span>${params[i].seriesName}</span><span style="float: right; margin-left:10px;">${params[i].value}</span></div>\n`;
            }
            return res;
          }
        },
        grid: {
          left: "3%",
          right: "3%",
          bottom: "3%",
          top: "20%",
          containLabel: true
        },
        legend: {
          itemWidth: 10,
          itemHeight: 10,
          right:20,
          data: []
        },
        xAxis: {
          // boundaryGap: false,
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#dcdbdb"
            }
          },
          axisLabel: {
            color: "#666666",
            fontSize: 10
          },
          data: Xdata
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#dcdbdb"
            }
          },
          axisLabel: {
            color: "#666666",
            fontSize: 12
          }
        },
        series: []
      };
      (option.color = this.color), console.log("this.color", this.data);
      option.legend.data = this.data.map(item => item.name);
      this.data.forEach((item, index) =>
        option.series.push({
          name: item.name,
          data: item.value,
          type: "bar",
          barMaxWidth: "10",
          stack: "处置量"
        })
      );
      this.chart.clear();
      this.chart.setOption(option);
    }
  }
};
</script>

<style lang="less" scoped>
._FlowAnalysisBar_root {
  position: relative;
  width: 100%;
  height: 100%;
  .chart-root {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
