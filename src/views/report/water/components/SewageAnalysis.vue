<template>
    <div class="_SewageAnalysis_root" v-reload="chart">
        <div class="chart-root" ref="sewage_analysis"></div>
    </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
export default {
    name: 'SewageAnalysis',
    props: {
        data: {
            type: Array,
            default: () => [
                {
                    name: '进水',
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
                    name: '出水',
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
                this.chart = echarts.init(this.$refs.sewage_analysis)
            }
        },
        upData() {
            this.initChart()
            if (!this.data || !Array.isArray(this.data)) return

            let Xdata = Array.from({ length: 30 }, (v, k) => k + 1)
            const option = {
                color: ['#f27e15', '#01b4ff'],
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
                        symbol: 'none', //这句就是去掉点的
                        smooth: true, //这句就是让曲线变平滑的
                        name: '进水',
                        type: 'line',
                        areaStyle: {},
                        opacity: 0.1,
                        data: [],
                    },
                    {
                        name: '出水',
                        type: 'line',
                        symbol: 'none', //这句就是去掉点的
                        smooth: true, //这句就是让曲线变平滑的
                        areaStyle: {},
                        data: [],
                        itemStyle: {
                            opacity: 0.1,
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    1,
                                    0, //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                                    [
                                        {
                                            offset: 0,
                                            color: '#033DFF', // 0% 处的颜色
                                        },
                                        {
                                            offset: 0.5,
                                            color: '#0277FF', // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: '#01AFFF', // 100% 处的颜色
                                        },
                                    ] //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                                ),
                            },
                        },
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
._SewageAnalysis_root {
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
