<template>
    <div class="_InletAnalysisBar_root" v-reload="chart">
        <div class="chart-root" ref="chart_dom"></div>
    </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
export default {
    name: 'InletAnalysisBar',
    props: {
        data: {
            type: Array,
            default: () => [
               { name: '生活污水总计', value: 5.1 },
                { name: '工业市排', value: 4.9 },
                { name: '工业区排', value: 5.2 },
                { name: '工业污水总计', value: 4.3 },
                { name: '二期合计', value: 5.6 },
                { name: '三期合计', value: 4.5 },
            ],
        },
    },
    watch: {
        data() {
            this.upData()
        },
    },
    data(){
        return{
            chart:null
        }
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
                tooltip: {
                    show: true,
                    trigger: 'axis',
                    extraCssText: 'text-align: left;',
                },
                grid: {
                    // show: false,
                    top: 20,
                    bottom: 20,
                    left: 20,
                    right: 36,
                    containLabel: true,
                },

                xAxis: {
                    type: 'value',
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
                },
                yAxis: [
                    {
                        inverse: true,
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
                            interval: 0,
                            margin: 30,
                            align: 'right',
                            // verticalAlign: 'bottom',
                        },
                        data: [],
                    },
                    {
                        inverse: true,
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
                            fontSize: 18,
                            interval: 0,
                            margin: 35,
                            align: 'left',
                            // verticalAlign: 'bottom',
                        },
                        data: [],
                    },
                ],

                series: [
                    // 灰色背景
                    {
                        name: '灰色背景',
                        type: 'bar',
                        data: [],
                        itemStyle: {
                            color: '#F3F3F3',
                        },
                        barWidth: 25,
                        tooltip: {
                            show: false,
                        },
                    },
                    // 柱图
                    {
                        name: '进水水质分析',
                        type: 'bar',
                        data: [],
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#ef6e18',
                                    },
                                    {
                                        offset: 1,
                                        color: '#fcc204',
                                    },
                                ],
                            },
                        },
                        barWidth: 25,
                        barGap: '-100%',
                    },
                ],
            }
            const yData0 = this.data.map((it) => it.name)
            const yData1 = this.data.map((it) => it.value || '-')
            const seriesData = this.data.map((it) => it.value || '-')
            const maxData = Math.max(...seriesData) * 1.3
            option.xAxis.max = maxData
            option.yAxis[0].data = yData0
            option.yAxis[1].data = yData1
            option.series[0].data = seriesData.map(() => maxData)
            option.series[1].data = seriesData
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
._InletAnalysisBar_root {
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
