<!-- WaterLineChart -->
<template>
    <div class="_WaterComparisonChart_root"  v-reload="chart">
        <div class="chart-root" ref="water_comparison_chart"></div>
    </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
export default {
    name: 'WaterComparisonChart',
    props: {
        data: {
            type: Array,
            default: () => [
                {
                    name: '进水',
                    value: 25,
                    child: [
                        {
                            name: '生活进水',
                            value: [
                                2.0,
                                4.9,
                                7.0,
                                23.2,
                                25.6,
                                76.7,
                                135.6,
                                162.2,
                                32.6,
                                20.0,
                            ],
                        },
                        {
                            name: '工业进水',
                            value: [
                                2.0,
                                4.9,
                                7.0,
                                23.2,
                                25.6,
                                76.7,
                                135.6,
                                162.2,
                                32.6,
                                20.0,
                            ],
                        },
                    ],
                },
                {
                    name: '排水',
                    value: 25,
                    child: [
                        {
                            name: '生活排水',
                            value: [
                                162.2,
                                32.6,
                                20.0,
                                6.4,
                                3.3,
                                162.2,
                                32.6,
                                20.0,
                                6.4,
                            ],
                        },
                        {
                            name: '工业排水',
                            value: [
                                32.6,
                                20.0,
                                6.4,
                                3.3,
                                6.4,
                                3.3,
                                162.2,
                                32.6,
                                20.0,
                                6.4,
                                3.3,
                            ],
                        },
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
    },
    methods: {
        initChart() {
            if (!this.chart) {
                this.chart = echarts.init(this.$refs.water_comparison_chart)
                console.log('this.chart ', this.chart)
            }
        },
        upData() {
            this.initChart()
            if (!this.data || !Array.isArray(this.data)) return
            const option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999',
                        },
                    },
                },
                grid: {
                    // show: false,
                    top: 20,
                    bottom: 10,
                    left: 20,
                    right: 20,
                    containLabel: true,
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
                        show: true,
                        color: '#666666',
                        fontSize: 10,
                    },
                    data: [1, 2, ...10],
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
                        name: '生活进水',
                        type: 'bar',
                        stack: '进水',
                        data: [],
                    },
                    {
                        name: '工业进水',
                        type: 'bar',
                        stack: '进水',
                        data:  [
                                32.6,
                                20.0,
                                6.4,
                                3.3,
                                6.4,
                                3.3,
                                162.2,
                                32.6,
                                20.0,
                                6.4,
                                3.3,
                            ],
                    },
                    {
                        name: '生活排水',
                        type: 'bar',
                        stack: '排水',
                        data: [
                                32.6,
                                20.0,
                                6.4,
                                3.3,
                                6.4,
                                3.3,
                                162.2,
                                32.6,
                                20.0,
                                6.4,
                                3.3,
                            ],
                    },
                    {
                        name: '工业排水',
                        type: 'bar',
                        stack: '排水',
                        data: [],
                    },
                    {
                        name: '平均温度',
                        type: 'line',
                        data: [],
                    },
                    {
                        name: '平均温度',
                        type: 'line',
                        data: [],
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
._WaterComparisonChart_root {
    position: relative;
    width: 100%;
    height: 100%;
    .chart-root {
        position: relative;
        height: 278px;
        background-color: #ffffff;
        box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
        border-radius: 4px;
    }
}
</style>
