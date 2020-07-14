<template>
    <div class="_SequentialAnalysisBar_root">
        <div class="chart-root">
            <my-echarts :options="echartsOptions" ref="sequential_analysis_chart"></my-echarts>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ComparisonBar',
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
    data() {
        return {
            echartsOptions: '',
        }
    },
    mounted() {
        window.onresize = () => {
            this.$refs.sequential_analysis_chart.reSize()
        }
    },
    created() {
        this.echartsOptions = this.optionsCreate(this.data)
    },

    methods: {
        optionsCreate() {
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
            return options
        },
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
        height: 80%;
    }
}
</style>
