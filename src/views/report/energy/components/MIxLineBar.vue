<template>
    <div class="_MixLineBar_root" v-reload="chart">
        <div class="chart-root" ref="chart_dom"></div>
    </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
export default {
    name: 'MixLineBar',
    props: {
        data: {
            type: Array,
            default: () => [
                {
                    name: '工业处理单位药耗',
                    value: [220, 290, 330, 310, 182, 191, 234],
                },
                {
                    name: '工业污水药耗',
                    value:  [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
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
            const Xdata = [...Array(31).keys()].slice(1)

            const option = {
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: '#FFF',
                    axisPointer: {
                        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                    },
                    textStyle: {
                        color: '#666666',
                        fontSize: '12px',
                        lineHeight: 56,
                    },
                    formatter: function(params) {
                        var res = ''
                        for (var i = 0, l = params.length; i < l; i++) {
                            res += `<div> 
                           <div><span style="display:inline-block;margin-right:10px;width:10px;height:10px;background-color:${params[i].color}"></span><span>${params[i].seriesName}</span></div>
                           <span style="margin-left:20px">${params[i].value}</span>
                            </div>`
                        }
                        return res
                    },
                },
                color: ['#3787ff', '#ffc191'],
                grid: {
                    left: '20%',
                    top: '25%',
                    bottom: '15%',
                    right: '10%',
                },
                xAxis: {
                    data: [
                        '1月',
                        '2月',
                        '3月',
                        '4月',
                        '5月',
                        '6月',
                        '7月',
                        '8月',
                        '9月',
                        '10月',
                        '11月',
                        '12月',
                    ],
                    axisTick: {
                        show: false,
                    },
                    axisPointer: {
                        type: 'shadow',
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#e6e6e6',
                            // width: 0.5 //这里是为了突出显示加上的
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#666666',
                            fontSize: 12,
                        },
                    },
                },
                yAxis: [
                    {
                        type: 'value',
                        name: '水量',
                        min: 0,
                        max: 250,
                        interval: 50,
                        splitLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#e6e6e6',
                                width: 1, //这里是为了突出显示加上的
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#666666',
                                fontSize: 12,
                            },
                        },
                    },
                    {
                        type: 'value',
                        name: '温度',
                        min: 0,
                        max: 25,
                        interval: 5,
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#e6e6e6',
                                width: 1, //这里是为了突出显示加上的
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#666666',
                                fontSize: 12,
                            },
                        },
                        splitLine: {
                            show: false,
                        },
                    },
                ],
                series: [
                    {
                        name: '降水量',
                        type: 'bar',
                        barWidth: 10,
                        data: [],
                    },
                    {
                        name: '平均温度',
                        type: 'line',
                        smooth: true,
                        yAxisIndex: 1,
                         data: []
                    },
                ],
            }
            option.series[0].data = this.data[0].value
            option.series[1].data = this.data[1].value
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
._MixLineBar_root {
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
