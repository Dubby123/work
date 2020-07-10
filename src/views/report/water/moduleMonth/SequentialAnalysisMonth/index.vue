<!-- WaterLineChart -->
<template>
    <div>
        <sub-title name="环比分析" />
        <rect-box class="_SequentialAnalysis_root">
            <div class="_SequentialAnalysis_top">
                <div>
                    <span class="title">进水环比分析</span>
                    <span class="subTitle">分析类型</span>
                    <my-select />
                </div>
                <month-but @handleTime="selectTime" />
            </div>
            <div class="chart-root" ref="sequential_analysis"></div>
        </rect-box>
    </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
export default {
    name: 'SequentialAnalysis',
    props: {
        data: {
            type: Array,
            default: () => [
                {
                    name: '本月',
                    value: [
                        120,
                        132,
                        101,
                        134,
                        90,
                        230,
                        210,
                        120,
                        132,
                        101,
                        134,
                    ],
                },
                {
                    name: '上月',
                    value: [
                        234,
                        290,
                        330,
                        310,
                        220,
                        182,
                        191,
                        234,
                        290,
                        330,
                        310,
                        220,
                        182,
                        191,
                        234,
                        290,
                        330,
                    ],
                },
            ],
        },
    },
    data() {
        return {
            MonthTime: '',
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
        selectTime(value) {
            this.MonthTime = value
        },
        initChart() {
            if (!this.chart) {
                this.chart = echarts.init(this.$refs.sequential_analysis)
            }
        },
        upData() {
            this.initChart()
            if (!this.data || !Array.isArray(this.data)) return
            let Xdata = Array.from({ length: 30 }, (v, k) => k + 1)
            const option = {
                color: ['#ffa448', 'rgba(255,164,72,0.3)'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999',
                        },
                    },
                },
                legend: {
                    itemWidth: 10,
                    itemHeight: 10,
                    orient: 'horizontal',
                    top: 0,
                    right: 10,
                    icon: 'rect',
                },
                grid: {
                    top: 20,
                    bottom: 10,
                    left: 20,
                    right: 20,
                    containLabel: true,
                },
                xAxis: {
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
                        show: true,
                        textStyle: {
                            color: '#666666',
                            fontSize: 10,
                        },
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
                    data: [],
                },
                series: [
                    {
                        name: '本月',
                        type: 'bar',
                        areaStyle: {},
                        data: [],
                    },
                    {
                        name: '上月',
                        type: 'bar',
                        areaStyle: {},
                        data: [],
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

</style>
