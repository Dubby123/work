<!-- QualityAnalysisPie -->
<template>
    <div class="_FlowAnalysisRader_root">
        <div class="chart-root" ref="chart_dom"></div>
    </div>
</template>
<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/radar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
export default {
    name: 'FlowAnalysisRader',
    props: {
        name: {
            type: String,
            default: '进水来源分析',
        },
        data: {
            type: Array,
            default: () => [
                {
                    name: '20t气浮污泥',
                    value: '2,185',
                },
                {
                    name: '40t气浮污泥',
                    value: '2,417',
                },
                {
                    name: '生活污水系统',
                    value: '2317',
                },
                {
                    name: '生活污水污泥',
                    value: '1001',
                },
                {
                    name: '工业污水污泥',
                    value: '2039',
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
           
                tooltip: {
                    show: true,
                    trigger: 'item',
                    // padding: [5, 10],
                },
                radar: {
                    radius: '50%',
                    center: ['50%', '40%'],
                    shape: 'circle',
                    splitNumber: 3,
                    name: {
                        textStyle: {
                            color: '#999',
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#409ee6',
                        },
                    },
                    splitArea: {
                        areaStyle: {
                            color: ['transparent'],
                        },
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#409ee6',
                        },
                    },
                    indicator: [
                        {
                            name: '攻击途径',
                            max: 10,
                        },
                        {
                            name: '攻击难度',
                            max: 10,
                        },
                        {
                            name: '权限要求',
                            max: 10,
                        },
                        {
                            name: '机密性影响',
                            max: 10,
                        },
                        {
                            name: '完整性影响',
                            max: 10,
                        },
                        {
                            name: '可用性影响',
                            max: 10,
                        },
                    ],
                },
                series: [
                    {
                        name: '风险评估',
                        type: 'radar',
                        symbol: 'emptyCircle', // 拐点的样式，还可以取值
                        symbolSize: 10, // 拐点的大小
                        itemStyle: {
                            normal: {
                                color: 'transparent',
                                borderColor: '#eb38c9',
                                borderWidth: 1,
                            },
                        },
                        areaStyle: {
                            normal: {
                                width: 1,
                                opacity: 0.7,
                            },
                        },
                        data: [
                            {
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            0,
                                            0,
                                            0,
                                            1, //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                                            [
                                                {
                                                    offset: 0,
                                                    color: '#06A4FF ',
                                                },
                                                {
                                                    offset: 0.5,
                                                    color: '#3E80FF ',
                                                },
                                                {
                                                    offset: 1,
                                                    color: '#755CFF ',
                                                },
                                            ] //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                                        ),
                                    },
                                },
                                value: [3, 5, 8, 9, 10, 8],
                            },
                        ],
                    },
                ],
            }
            this.chart.clear()
            this.chart.setOption(option)
        },// 重置图表大小
        reSize() {
            if (this.chart) {
                console.log(123)
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
._FlowAnalysisRader_root {
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
