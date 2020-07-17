<template>
    <div class="_SequentialAnalysisBar_root" v-reload="chart">
        <div class="chart-root" ref="chart_dom"></div>
    </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
export default {
    name: 'SequentialAnalysisBar',
    props: {
        data: {
            type: Array,
            default: () => [
                {
                    name: '本月',
                    value: [220, 290, 330, 310, 182, 191, 234],
                },
                {
                    name: '上月',
                    value: [220, 182, 191, 234, 290, 330, 310],
                },
            ],
        },
        color: {
            type: Array,
            default: () => ['#ffa448', 'rgba(255,164,72,0.33)'],
        },
    },
    watch: {
        data() {
            this.upData()
        },
    },
    data(){
        return{
            chart:null
        }
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
            let Xdata = Array.from({ length: 30 }, (v, k) => k + 1)
            let options = {
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
            options.color = this.color
            options.series = this.data.map((item) => {
                var itemData = {}
                itemData.name = item.name
                itemData.type = 'bar'
                itemData.data = item.value
                itemData.barWidth = '8'
                return itemData
            })
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
._SequentialAnalysisBar_root {
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
