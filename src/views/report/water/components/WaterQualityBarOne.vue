<!-- WaterQualityBar -->
<template>
    <div class="_WaterQualityBar_root"   v-reload="chart">
        <div class="chart-root" ref="chart_dom"></div>
    </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

export default {
    name: 'WaterQualityBarOne',
    props: {
        data: {
            type: Array,
            default: () => [
                { name: 'COD', value1: 5.1, value2: 5.1, value3: 11.1 },
                { name: 'SS', value1: 4.9, value2: 4.9, value3: 10.9 },
                { name: 'TN', value1: 5.2, value2: 5.2, value3: 12.2 },
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
                dataset: {
                    source: [
                        { name: 'COD', value1: 5.1, value2: 4.1 },
                        { name: 'SS', value1: 4.9, value2: 4.9 },
                        { name: 'TN', value1: 5.2, value2: 5.2 },
                    ],
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
                        color: '#666666',
                        fontSize: 14,
                        margin: 52,
                        align: 'right',
                        verticalAlign: 'bottom',
                    },
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
                        show: true,
                    },
                },
                series: [
                    {
                        type: 'bar',
                         barGap:'50%',
                        label: {
                            show: true,
                            position: [440, -2],
                            distance: 0,
                            align: 'right',
                            fontSize: 18,
                            color: '#ff5656',
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
                                        color: '#ff2300',
                                    },
                                    {
                                        offset: 1,
                                        color: '#ffb300',
                                    },
                                ],
                            },
                        },

                        barWidth: 14,
                        tooltip: {
                            show: false,
                        },
                    },
                    {
                        type: 'bar',
                        barGap:'50%',
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
                            opacity: 1,
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
                                        color: '#ff2300',
                                    },
                                    {
                                        offset: 1,
                                        color: '#ffb300',
                                    },
                                ],
                            },

                            opacity: 0.5,
                        },

                        barWidth: 14,
                        tooltip: {
                            show: false,
                        },
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
