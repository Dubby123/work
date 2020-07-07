<!-- WaterLineChart -->
<template>
    <div class="_WaterComparisonChart_root">
        <rect-box>
            <div class="chart-root" ref="water_comparison_chart"></div>
        </rect-box>
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
            default: () => [],
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

                legend: {
                    data: ['总进水', '生活进水','生活进水', '累计排水','生活排水','工业排水'],
                },
                title: {
                    text: '当月累计进水排水统计',
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
                    data: function() {
                        return [...new Array(30).keys()]
                    },
                    //  data:[]
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
                        name: '蒸发量',
                        type: 'bar',
                        data: [
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
                            6.4,
                            3.3,
                            162.2,
                            32.6,
                            20.0,
                            6.4,
                            3.3,
                            162.2,
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
                        name: '降水量',
                        type: 'bar',
                        data: [
                            2.6,
                            5.9,
                            9.0,
                            26.4,
                            28.7,
                            70.7,
                            175.6,
                            182.2,
                            48.7,
                            18.8,
                            6.0,
                            2.3,
                            70.7,
                            175.6,
                            182.2,
                            48.7,
                            18.8,
                            6.0,
                            2.3,
                            70.7,
                            175.6,
                            182.2,
                            48.7,
                            18.8,
                            6.0,
                            2.3,
                        ],
                    },
                    {
                        name: '平均温度',
                        type: 'line',
                        yAxisIndex: 1,
                        data: [
                            2.0,
                            2.2,
                            3.3,
                            4.5,
                            6.3,
                            10.2,
                            20.3,
                            23.4,
                            23.0,
                            16.5,
                            12.0,
                            6.2,
                        ],
                    },
                ],
            }

            // const option = {
            //     tooltip: {
            //         show: true,
            //         trigger: 'axis',
            //     },

            //     series: [
            //         {
            //             data: [],
            //             type: 'bar',
            //             barWidth: 24,
            //             showBackground: true,
            //             backgroundStyle: {
            //                 color: '#F2F2F2',
            //             },
            //             itemStyle: {
            //                 data:[50, 75, 100, 150, 200, 250, 150, 100, 95, 160, 50, 45],

            //             },

            //         }],
            // }
            // option.series[0].data = this.data
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
    height: 356px;
    .chart-root {
        position: relative;
        height: 278px;
        background-color: #ffffff;
        box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
        border-radius: 4px;
    }
}
</style>
