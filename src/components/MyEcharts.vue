<template>
  <div class="chart-swapper">
    <div class="chart-root" :id="id" @option="options"></div>
  </div>
</template>

<script>
import echarts from "echarts";
// 引入提示框组件、标题组件、工具箱组件。
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/toolbox";
export default {
  props: ["id", "options"],
  data() {
    return {
      chart: null // chart实例
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (this.chart) {
        this.chart.resize();
        console.log('+++++',this.chart.resize)
      }
    });

    this.init(this.id, this.options);
  },
  watch: {
    options: {
      handler(newVal, oldVal) {
        this.chart.resize();
        if (this.chart) {
          if (newVal) {
            this.chart.setOption(newVal, true);
          } else {
            this.chart.setOption(oldVal, true);
          }
        } else {
          this.init();
        }
      },
      deep: true //对象内部属性的监听
    }
  },
  methods: {
    init(id, options) {
      let myChart = document.getElementById(id);
      this.chart = echarts.init(myChart);
      this.chart.setOption(options);
      window.addEventListener("resize", () => {
        if (this.chart) {
          this.chart.resize();
        }
      });
    }
  },
  // 在当前vue实例销毁前,如果存在chart图表,先销毁chart图表
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
      this.chart = null;
    }
  }
};
</script>
<style scoped lang="less">
.chart-swapper {
  width: 100%;
  height: 100%;
  .chart-root {
    width: 100%;
    height: 100%;
  }
}
</style>
