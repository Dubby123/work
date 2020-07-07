<!-- WaterLineChart -->
<template>
    <div class="_SewageAnalysis_root">
        <rect-box>
    
                <div>生活污水水质平均值分析</div>
                <span>水质类型</span>
           

            <div class="chart-root" ref="sewage_analysis"></div>
        </rect-box>
    </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
export default {
    name: 'SewageAnalysis',
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
                    y: '55%',
                    textStyle: {
                        fontSize: 18, //字体大小
                        color: '#000000', //字体颜色
                    },
                    data: ['进水', '出水'],
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
                            310,
                            156,
                            78,
                        ],
                    },
                    {
                        name: '出水',
                        type: 'line',
                        symbol: 'none', //这句就是去掉点的
                        smooth: true, //这句就是让曲线变平滑的
                        areaStyle: {},
                        data: [
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
                            90,
                            230,
                            210,
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
                            90,
                            230,
                            210,
                            230,
                            210,
                        ],
                    },
                ],
            }

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
._SewageAnalysis_root {
    position: relative;
    width: 100%;
    height: 359px;
    .chart-root {
        position: relative;
        height: 80%;
        background-color: #ffffff;
        box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
        border-radius: 4px;
    }
}
</style>
