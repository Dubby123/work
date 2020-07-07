<!-- WaterLineChart -->
<template>
    <div class="_WaterBarChart_root">
        <rect-box>
            <div class="chart-root" ref="bar_chart"></div>
        </rect-box>
    </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

export default {
    name: 'WaterBarChart',
    props: {
        data: {
            type: Array,
            default: () => [120, 200, 150, 80, 70, 110, 130],
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
                this.chart = echarts.init(this.$refs.bar_chart)
            }
        },
        upData() {
            this.initChart()
            if (!this.data || !Array.isArray(this.data)) return
            const option = {
                tooltip: {
                    show: true,
                    trigger: 'axis',
                },
                title: {
                    text: '进水水质分析',
                },
                // title: {
                //     text:"进水水质分析",
                //     fontSize:14,
                //     color:'#666666'
                // },
                grid: {
                    // show: false,
                    top: 20,
                    bottom: 10,
                    left: 20,
                    right: 20,
                    containLabel: true,
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: false,
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    data: [],
                },
                yAxis: {
                    type: 'category',
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        color: '#666666',
                        fontSize: 12,
                    },
                    data: [
                        '三期合计',
                        '二期合计',
                        '工业污水总计',
                        '工业区排',
                        '工业市排',
                        '生活污水总计',
                    ],
                },
                series: [
                    {
                        data: [],
                        type: 'bar',
                        barWidth: 24,
                        showBackground: true,
                        backgroundStyle: {
                            color: '#F2F2F2',
                        },
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                1,
                                0,
                                0,
                                1,
                                [
                                    // { offset: 0.5, color: '#188df0' },
                                    { offset: 0, color: '#fcc204' },
                                    { offset: 1, color: '#ef6e18' },
                                ]
                            ),
                        },
                        emphasis: {
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        { offset: 0, color: '#ef6e18' },
                                        // { offset: 0.7, color: '#2378f7' },
                                        { offset: 1, color: '#fcc204' },
                                    ]
                                ),
                            },
                        },
                    },
                ],
            }
            option.series[0].data = this.data
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
._WaterBarChart_root {
    position: relative;
    width: 100%;
    height: 278px;
    .chart-root {
        position: relative;
        height: 278px;
        background-color: #ffffff;
        box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
        border-radius: 4px;
    }
}
</style>
