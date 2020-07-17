<!-- WaterQualityBar -->
<template>
    <div class="_WaterQualityBar_root"  v-reload="chart">
        <div class="chart-root" ref="chart_dom"></div>
    </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

export default {
    name: 'WaterQualityBar',
    props: {
        data: {
            type: Array,
            default: () => [
                { name: 'COD', value1: 5.1, value2: 5.1, value3: 11.1 },
                { name: 'SS', value1: 4.9, value2: 4.9, value3: 10.9 },
                { name: 'TN', value1: 5.2, value2: 5.2, value3: 12.2 },
            ],
        },
        legend: {
            type: Array,
            default: () => [
                {
                    name: '生活进水',
                    color: ['#ff2300', '#ffb300'],
                    opacity: 1,
                },
                {
                    name: '工业进水',
                    color: ['rgba(255,35,0,0.5)', 'rgba(255,179,0,0.5)'],
                    opacity: 1,
                },
                {
                    name: '排水',
                    color: ['#005dff', '#0099ff'],
                    opacity: 0.8,
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
            const option = {
                tooltip: {
                    show: true,
                    trigger: 'axis',
                    extraCssText: 'text-align: left;',
                },
                grid: {
                    // show: false,
                    top: 2,
                    bottom: 2,
                    left: 118,
                    right: 20,
                    // containLabel: true,
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
                yAxis: {
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
                        fontSize: 14,
                        margin: 52,
                        align: 'right',
                        verticalAlign: 'bottom',
                    },
                    data: [],
                },
                series: [
                    // 进水右侧数字
                    {
                        name: '进水1',
                        type: 'bar',
                        stack: '进水',
                        data: [],
                        label: {
                            show: true,
                            position: [440, -2],
                            distance: 0,
                            formatter: (params) => {
                                return (params.data && params.data.sum) || 0
                            },
                            align: 'right',
                            fontSize: 18,
                            color: '#ff5656',
                        },
                        barWidth: 14,
                        tooltip: {
                            show: false,
                        },
                    },
                    // 进水左侧小标题
                    {
                        name: '进水',
                        type: 'bar',
                        stack: '进水',
                        data: [],
                        label: {
                            show: true,
                            position: 'left',
                            distance: 5,
                            formatter: '{a}',
                            color: '#666666',
                        },
                        barWidth: 14,
                        tooltip: {
                            show: false,
                        },
                    },
                    {
                        name: '生活进水',
                        type: 'bar',
                        stack: '进水',
                        data: [],
                        label: {
                            show: true,
                            position: 'insideLeft',
                            distance: 10,
                            color: '#ffffff',
                        },
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
                                        color:
                                            (this.legend[0] &&
                                                this.legend[0].color &&
                                                this.legend[0].color[0]) ||
                                            '#fcc204',
                                    },
                                    {
                                        offset: 1,
                                        color:
                                            (this.legend[0] &&
                                                this.legend[0].color &&
                                                this.legend[0].color[1]) ||
                                            '#ef6e18',
                                    },
                                ],
                            },
                        },
                        barWidth: 14,
                    },
                    {
                        name: '工业进水',
                        type: 'bar',
                        stack: '进水',
                        data: [],
                        label: {
                            show: true,
                            position: 'insideLeft',
                            distance: 10,
                            color: '#ffffff',
                        },
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
                                        color:
                                            (this.legend[1] &&
                                                this.legend[1].color &&
                                                this.legend[1].color[0]) ||
                                            '#fcc204',
                                    },
                                    {
                                        offset: 1,
                                        color:
                                            (this.legend[1] &&
                                                this.legend[1].color &&
                                                this.legend[1].color[1]) ||
                                            '#ef6e18',
                                    },
                                ],
                            },
                            opacity:
                                (this.legend[1] && this.legend[1].opacity) || 1,
                        },
                        barWidth: 14,
                    },
                    // 排水左侧小标题
                    {
                        name: '出水',
                        stack: '排水',
                        type: 'bar',
                        data: [],
                        barWidth: 14,
                        label: {
                            show: true,
                            position: 'left',
                            distance: 5,
                            formatter: '{a}',
                            color: '#666666',
                        },
                        tooltip: {
                            show: false,
                        },
                    },
                    {
                        name: '排水',
                        stack: '排水',
                        type: 'bar',
                        data: [],
                        barGap: '80%',
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
                                        color:
                                            (this.legend[2] &&
                                                this.legend[2].color &&
                                                this.legend[2].color[0]) ||
                                            '#fcc204',
                                    },
                                    {
                                        offset: 1,
                                        color:
                                            (this.legend[2] &&
                                                this.legend[2].color &&
                                                this.legend[2].color[1]) ||
                                            '#ef6e18',
                                    },
                                ],
                            },
                            opacity:
                                (this.legend[2] && this.legend[2].opacity) || 1,
                        },
                        label: {
                            show: true,
                            position: [440, -2],
                            distance: 0,
                            formatter: '{c}',
                            align: 'right',
                            fontSize: 18,
                            color: '#53bb3a',
                        },
                        barWidth: 14,
                    },
                ],
            }
            const yData = []
            let seriesAll = []
            const seriesData0 = [] // 进水 = 生活进水 + 工业进水
            const seriesData1 = [] // 生活进水 value1
            const seriesData2 = [] // 工业进水 value2
            const seriesData3 = [] // 排水label value3
            const seriesData4 = [] // 排水 value3
            this.data.forEach((it) => {
                yData.push(it.name || '')
                seriesAll = seriesAll.concat([it.value1, it.value2, it.value3])
                seriesData0.push({
                    name: it.name,
                    value: 0,
                    sum:
                        ((it.value1 && Number(it.value1)) || 0) +
                        ((it.value2 && Number(it.value2)) || 0),
                })
                seriesData1.push({
                    name: it.name,
                    value: (it.value1 && Number(it.value1)) || 0,
                })
                seriesData2.push({
                    name: it.name,
                    value: (it.value2 && Number(it.value2)) || 0,
                })
                seriesData3.push({
                    name: it.name,
                    value: 0,
                    sum: (it.value3 && Number(it.value3)) || 0,
                })
                seriesData4.push({
                    name: it.name,
                    value: (it.value3 && Number(it.value3)) || 0,
                })
            })
            option.xAxis.max = Math.max(...seriesAll) * 1.2
            option.yAxis.data = yData
            option.series[0].data = seriesData0
            option.series[1].data = seriesData0
            option.series[2].data = seriesData1
            option.series[3].data = seriesData2
            option.series[4].data = seriesData3
            option.series[5].data = seriesData4
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
._WaterQualityBar_root {
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
