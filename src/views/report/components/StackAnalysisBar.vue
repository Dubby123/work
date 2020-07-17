<!-- QualityAnalysisPie -->
<template>
    <div class="_StackAnalysisBar_root" v-reload="chart">
        <div class="chart-root" ref="chart_dom"></div>
    </div>
</template>
<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
export default {
    name: 'StackAnalysisBar',
    props: {
        data: {
            type: Array,
            default: () => [
                {
                    name: '新区',
                    value: [220, 290, 330, 310, 182, 191, 234],
                },
                {
                    name: '老区qu',
                    value: [220, 182, 191, 234, 290, 330, 310],
                },
            ],
        },
        color: {
            type: Array,
            default: () => ['#6fbcf8', '#ffc785'],
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
            const Xdata = [...Array(31).keys()].slice(1)
            const option = {
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: '#FFF',
                    axisPointer: {
                        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                    },
                    textStyle: {
                        color: '#666666',
                        fontSize: '12px',
                        lineHeight: 56,
                    },
                    formatter: function(params) {
                        var res = ''
                        for (var i = 0, l = params.length; i < l; i++) {
                            res += `<div style='overflow: hidden;'>
                            <span style='float: left;margin-right:20px;'>
                            <span style="display:inline-block;margin-right:10px;width:10px;height:10px;background-color:${params[i].color}"></span>
                            <span>${params[i].seriesName}</span></span>
                            <span style="float: right;">${params[i].value}</span>
                         </div>`
                        }
                        return res
                    },
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    top: '20%',
                    containLabel: true,
                },
                legend: {
                    itemWidth: 10,
                    itemHeight: 10,
                    right: 20,
                    data: [],
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
                series: [],
            }
            option.color = this.color
            option.legend.data = this.data.map((item) => item.name)
            this.data.forEach((item) =>
                option.series.push({
                    name: item.name,
                    data: item.value,
                    type: 'bar',
                    barMaxWidth: '10',
                    stack: '总量',
                })
            )
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
._StackAnalysisBar_root {
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
