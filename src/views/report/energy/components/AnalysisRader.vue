<!-- QualityAnalysisPie -->
<template>
    <div class="_AnalysisRader_root" v-reload="chart">
        <div class="chart-root" ref="chart_dom"></div>
    </div>
</template>
<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/radar'
import 'echarts/lib/component/tooltip'
export default {
    name: 'FlowAnalysisRader',
    props: {
        data: {
            type: Array,
            default: () => [
                {
                    name: '20t气浮污泥',
                    value: [
                        5000,
                        14000,
                        28000,
                        31000,
                        42000,
                        21000,
                        5000,
                        14000,
                        28000,
                        31000,
                        42000,
                        21000,
                    ],
                },
                {
                    name: '40t气浮污泥',
                    value: [
                        5000,
                        14000,
                        21000,
                        5000,
                        14000,
                        28000,
                        31000,
                        42000,
                        21000,
                        28000,
                        31000,
                        42000,
                    ],
                },
                {
                    name: '生活污水系统',
                    value: [
                        5000,
                        14000,
                        28000,
                        31000,
                        42000,
                        21000,
                        28000,
                        31000,
                        42000,
                        21000,
                        5000,
                        14000,
                    ],
                },
                {
                    name: '生活污水污泥',
                    value: [
                        5000,
                        14000,
                        21000,
                        5000,
                        14000,
                        28000,
                        31000,
                        42000,
                        21000,
                        28000,
                        31000,
                        42000,
                    ],
                },
                {
                    name: '工业污水污泥',
                    value: [
                        42000,
                        21000,
                        5000,
                        14000,
                        28000,
                        31000,
                        42000,
                        21000,
                        5000,
                        14000,
                        28000,
                        31000,
                    ],
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
        const that = this
        window.onresize = () => {
            that.reSize()
        }
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
                title: {
                    text: '基础雷达图',
                },
                tooltip: {},
                legend: {
                    itemWidth: 10,
                    itemHeight: 10,
                    orient: 'vertical',
                    right: '30',
                    bottom: '40%',
                },
                radar: {
                    shape: 'circle',
                    splitNumber: 3,
                    name: {
                        textStyle: {
                            color: '#666666',
                        },
                    },
                    indicator: [
                        { name: '销售（sales）', max: 6500 },
                        { name: '管理（Administration）', max: 16000 },
                        {
                            name: '信息技术（Information Techology）',
                            max: 30000,
                        },
                        { name: '客服（Customer Support）', max: 38000 },
                        { name: '研发（Development）', max: 52000 },
                        { name: '市场（Marketing）', max: 25000 },
                        { name: '客服（Customer Support）', max: 38000 },
                        { name: '研发（Development）', max: 52000 },
                        { name: '市场（Marketing）', max: 25000 },
                        { name: '客服（Customer Support）', max: 38000 },
                        { name: '研发（Development）', max: 52000 },
                        { name: '市场（Marketing）', max: 25000 },
                    ],
                    splitLine: {
                        lineStyle: {
                            color: '#9a9aff',
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#9a9aff',
                        },
                    },
                },
                series: [
                    {
                        name: '预算 vs 开销（Budget vs spending）',
                        type: 'radar',
                        data: [
                            {
                                symbol: 'emptyCircle',
                                symbolSize: 10,
                                value: [
                                    4300,
                                    10000,
                                    28000,
                                    35000,
                                    50000,
                                    19000,
                                ],
                                name: '预算分配（Allocated Budget）',
                                areaStyle: {
                                    opacity: 0.5,
                                    color: '#f28338',
                                },
                                lineStyle: {
                                    color: '#f28338',
                                },
                            },
                            {
                                symbol: 'emptyCircle',
                                symbolSize: 10,
                                value: [
                                    5000,
                                    14000,
                                    28000,
                                    31000,
                                    42000,
                                    21000,
                                ],
                                name: '实际开销（Actual Spending）',
                                areaStyle: {
                                    opacity: 0.5,
                                    color: '#9a9aff',
                                },
                                lineStyle: {
                                    color: '#9a9aff',
                                },
                            },
                        ],
                    },
                ],
            }
            this.chart.clear()
            this.chart.setOption(option)
        }, // 重置图表大小
        reSize() {
            if (this.chart) {
                this.chart.resize({ width: 'auto', height: 'auto' })
            }
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
._AnalysisRader_root {
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
