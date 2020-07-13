<template>
  <div class="_ComparisonBar_root">
    <div class="chart-root">
      <my-echarts id="'ComparisonBa'" :options="echartsOptions"></my-echarts>
    </div>
  </div>
</template>
<script>
export default {
  name: "ComparisonBar",
  props: {
    data: {
      type: Array,
      default: () => [
        {
          name: "浓缩污泥折算量",
          value: [220, 290, 330, 310, 182, 191, 234]
        },
        {
          name: "临时堆场污泥折算量",
          value: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: "气浮污泥折算量",
          value: [220, 182, 191, 234, 290, 330, 310]
        }
      ]
    }
  },
  data() {
    return {
      echartsOptions: ""
    };
  },
  created() {
    this.echartsOptions = this.optionsCreate(this.data);
  },
  methods: {
    optionsCreate(data) {
      let options = {
        color: ["#6fbcf8", "#ff6f00", "#ffaa47"],
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
            console.log('params',params);
            var res = "";
            for (var i = 0, l = params.length; i < l; i++) {
              res += `<div><span style="display:inline-block;margin-right:10px;width:10px;height:10px;background-color:${params[i].color}"></span><span>${params[i].seriesName}</span><span style="float: right; margin-left:10px;">${params[i].value}</span></div>\n`;
            }
            return res;
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "20%",
          containLabel: true
        },
        legend: {
          itemWidth: 10,
          itemHeight: 10,
          right:0,
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
          data: []
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

      var itemData = {};
      options.legend.data = this.data.map(item=>item.name)
      options.series = this.data.map(item => {
        var itemData = {};
        itemData.name = item.name;
        itemData.type = "bar";
        itemData.data = item.value;
        itemData.barWidth = '3';
        return itemData;
      });
      console.log("options.series", options.tooltip);
      return options;
    }
  }
};
</script>

<style lang="less" scoped>
._ComparisonBar_root {
  position: relative;
  width: 100%;
  height: 100%;
  .chart-root {
    position: relative;
    width: 100%;
    height: 80%;
  }
}
</style>
