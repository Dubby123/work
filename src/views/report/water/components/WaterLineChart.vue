<!-- WaterLineChart -->
<template>
  <div class="_WaterLineChart_root" v-reload="chart">
    <div class="chart-root" ref="chart_dom"></div>
  </div>
</template>

<script>
  import echarts from 'echarts/lib/echarts';
  import 'echarts/lib/chart/line';
  import 'echarts/lib/component/tooltip';

  export default {
    name: 'WaterLineChart',
    props: {
      data: {
        type: Array,
        default: () => ([
          { name: '0', value: 2100 },
          { name: '02:00', value: 3200 },
          { name: '03:00', value: 4479 },
          { name: '04:00', value: 2100 },
          { name: '05:00', value: 2100 },
          { name: '06:00', value: 2100 },
          { name: '07:00', value: 2100 },
          { name: '08:00', value: 4689 },
          { name: '09:00', value: 2100 },
          { name: '10:00', value: 2100 },
          { name: '11:00', value: 9864 },
          { name: '12:00', value: 2100 },
          { name: '13:00', value: 5780 },
          { name: '14:00', value: 2100 },
          { name: '15:00', value: 2100 },
          { name: '16:00', value: 2467 },
          { name: '17:00', value: 2100 },
          { name: '18:00', value: 2100 },
          { name: '19:00', value: 2100 },
          { name: '20:00', value: 5789 },
          { name: '21:00', value: 2100 },
          { name: '22:00', value: 2100 },
          { name: '23:00', value: 2100 },
          { name: '24:00', value: 6789 },
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
  ._WaterLineChart_root {
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
