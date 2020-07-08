<!-- QualityAnalysisPie -->
<template>
  <div class="_QualityAnalysisPie_root">
    <div class="chart-root" ref="chart_dom"></div>
  </div>
</template>

<script>
  import echarts from 'echarts/lib/echarts';
  import 'echarts/lib/chart/pie';
  import 'echarts/lib/component/tooltip';

  export default {
    name: 'QualityAnalysisPie',
    props: {
      data: {
        type: Array,
        default: () => ([
          {
            name: '生活污水',
            value: '25%',
            child: [
              { name: '生活污水市排1400', value: 8 },
              { name: '生活污水新齐贤泵站', value: 8 },
              { name: '生活污水安滨1600', value: 9 },
            ],
          },
          {
            name: '工业污水',
            value: '75%',
            child: [
              { name: '工业污水市排', value: 40 },
              { name: '工业污水区排', value: 35 },
            ],
          },
        ]),
      },
    },
    data() {
      return {
        chart: null,
      };
    },
    watch: {
      data() {
        this.upData();
      },
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
        const option = {
          tooltip: {
            show: true,
            trigger: 'axis',
            extraCssText: 'text-align: left;',
          },
          grid: {
            // show: false,
            top: 10,
            bottom: 10,
            left: 20,
            right: 20,
            containLabel: true,
          },
          xAxis: {
            boundaryGap: false,
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#dcdbdb',
              },
            },
            axisLabel: {
              color: '#666666',
              fontSize: 10,
            },
            data: [],
          },
          yAxis: {
            type: 'value',
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#dcdbdb',
              },
            },
            axisLabel: {
              color: '#666666',
              fontSize: 12,
            },
          },
          series: [
            {
              name: '当日进水量',
              type: 'line',
              data: [],
              showSymbol: false,
              itemStyle: {
                color: '#ef6e18',
              },
              lineStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [{
                    offset: 0, color: '#fcc204',
                  }, {
                    offset: 1, color: '#ef6e18',
                  }],
                },
              },
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#ef6e18',
                  }, {
                    offset: 1, color: 'rgba(252,194,4,0)',
                  }],
                },
                opacity: 0.25,
              },
              smooth: true,
            },
          ],
        };
        const xData = [];
        const seriesData = [];
        this.data.forEach((it) => {
          xData.push(it.name || '');
          seriesData.push(it.value || '-');
        });
        option.xAxis.data = xData;
        option.series[0].data = seriesData;
        this.chart.clear();
        this.chart.setOption(option);
      },
    },
    beforeDestroy() {
      if (this.chart) {
        this.chart.dispose();
        this.chart = null;
      }
    },
  };
</script>

<style lang="less" scoped>
  ._QualityAnalysisPie_root {
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
