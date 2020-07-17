<template>
    <div class="_DoubleContrastLine_root" v-reload="chart">
        <div class="chart-root" ref="chart_dom"></div>
    </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
export default {
    name: 'DoubleContrastLine',
    props: {
        data: {
            type: Array,
            default: () => [
                {
                    name: 'A2O系统',
                    value: [220, 290, 330, 310, 182, 191, 234],
                },
                {
                    name: 'AO系统',
                    value: [220, 182, 191, 234, 290, 330, 310],
                },
            ],
        },
    },
    data() {
        return {
            chart: null,
        }
    },
    watch: {
        data() {
            this.upData()
        },
    },
    mounted() {
        this.upData()
    },
    methods: {
        initChart() {
            if (!this.chart) {
                this.chart = echarts.init(this.$refs.chart_dom)
            }
        },
        upData() {
            this.initChart()
            if (!this.data || !Array.isArray(this.data)) return
            let Xdata = Array.from({ length: 30 }, (v, k) => k + 1)
            let option = {
                color: ['#ffac3d', '#1696ff'],
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
                    data: Xdata,
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
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: '#FFF',
                    axisPointer: {
                        type: 'shadow', // 默认为直线，可选为：'line'
                    },
                    textStyle: {
                        color: '#666666',
                        fontSize: '12px',
                        lineHeight: 56,
                    },
                    formatter: function(params) {
                        var res = ''
                        for (var i = 0, l = params.length; i < l; i++) {
                            res += ` <div><span style="display:inline-block;margin-right:10px;width:10px;height:10px;background-color:${params[i].color.colorStops[0].color}"></span><span> 
                                 ${params[i].seriesName}</span><span style="float: right; margin-left:10px;">
                                ${params[i].value}</span></div>\n`
                        }
                        return res
                    },
                },
                series: [
                    {
                        name: 'A2O系统',
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#ff6f00', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#ffbc1e', // 100% 处的颜色
                                },
                            ],
                            global: false, // 缺省为 false
                        },
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                    },
                    {
                        name: 'AO系统',
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#0336ff', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#01b4ff', // 100% 处的颜色
                                },
                            ],
                            global: false, // 缺省为 false
                        },
                        data: [820, 656, 956, 934, 454, 1330, 1320],
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                    },
                ],
            }
            this.chart.clear()
            this.chart.setOption(option)
        },
    },
    beforeDestroy() {
        if (this.chart) {
            this.chart.dispose()
            this.chart = null
        }
    },
}
</script>

<style lang="less" scoped>
  ._DoubleContrastLine_root {
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
