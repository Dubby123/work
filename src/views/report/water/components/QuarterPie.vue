<template>
    <div class="_QuarterPie_root" v-reload="chart">
        <div class="chart-root" ref="chart_dom"></div>
    </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
export default {
    name: 'QuarterPie',
    props: {
        data: {
            type: Array,
            default: () => [
                {
                    name: '1月',
                    value: 25,
                },
                {
                    name: '2月',
                    value: 76,
                },
                {
                    name: '3月',
                    value: 78,
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
            let options = {
                title: {
                    text: '当月进水量季度占比',
                    left: 60,
                    top: 0,
                    textStyle: {
                        color: '#666666',
                        fontSize: 14,
                    },
                },
                color: ['#b4c8ff', '#f9a57f', '#6890ff'],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                series: [
                    {
                        name: '月份',
                        type: 'pie',
                        radius: [0, 83],
                        center: ['50%', '50%'],
                        roseType: 'radius',
                        label: {
                            show: true,
                            formatter: '{b}{d}%',
                            fontSize: '14',
                            d: {
                                color: '#333333',
                                fontSize: 16,
                                align: 'center',
                                fontWeight: 'bold',
                            },
                        },
                        emphasis: {
                            label: {
                                show: true,
                            },
                        },
                        data: [],
                    },
                ],
            }
            options.series[0].name = this.data.map((item) => item.name)
            options.series[0].data = this.data
            this.chart.clear()
            this.chart.setOption(options)
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
._QuarterPie_root {
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
