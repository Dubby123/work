<!-- QualityAnalysisPie -->
<template>
    <div class="_FlowAnalysisLine_root">
        <div class="chart-root" ref="chart_dom"></div>
    </div>
</template>
<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
export default {
    name: 'FlowAnalysisLine',
    props: {
        data: {
            type: Array,
            default: () => [220, 182, 191, 234, 290, 330, 310,191, 234, 290, 330, 310],
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
                console.log(' this.chart ', this.chart)
            }
        },
        upData() {
            this.initChart()
            if (!this.data || !Array.isArray(this.data)) return
            const Xdata = [...Array(31).keys()].slice(1)
            const option = {
                tooltip: {
                    show: true,
                    trigger: 'item',
                    extraCssText: 'text-align: left;',
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
                series: [
                    {
                        data: [
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
                              234,
                            290,
                            330,
                            310,
                            220,
                            182,
                            191,
                            234,
                            290,
                        ],
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#aedbfe', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: '#228ee1', // 100% 处的颜色
                                    },
                                ],
                                global: false, // 缺省为 false
                            },
                        },

                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#aedbfe', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: '#228ee1', // 100% 处的颜色
                                    },
                                ],
                                global: false, // 缺省为 false
                            },
                           opacity: 0.39,
                        },
                    },
                ],
            }
            option.series[0].data =this.data
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
._FlowAnalysisLine_root {
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
