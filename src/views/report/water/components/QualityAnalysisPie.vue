<!-- QualityAnalysisPie -->
<template>
    <div class="_QualityAnalysisPie_root"  v-reload="chart">
        <div class="chart-root" ref="chart_dom"></div>
    </div>
</template>
<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import { doublePlate } from '../../../../utils'

export default {
    name: 'QualityAnalysisPie',
    props: {
        name: {
            type: String,
            default: '进水来源分析',
        },
        data: {
            type: Array,
            default: () => [
                {
                    name: '生活污水',
                    value: 25,
                    child: [
                        { name: '生活污水市排1400', value: 8 },
                        { name: '生活污水新齐贤泵站', value: 8 },
                        { name: '生活污水安滨1600', value: 9 },
                    ],
                },
                {
                    name: '工业污水',
                    value: 75,
                    child: [
                        { name: '工业污水市排', value: 40 },
                        { name: '工业污水区排', value: 35 },
                    ],
                },
            ],
        },

        colorIndex: {
            type: Number,
            default: 0,
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
            let name = this.name
            if (name.length > 4) {
                name =
                    name.substring(0, 4) + '\n' + name.substring(4, name.length)
            }
            const option = {
                title: {
                    show: true,
                    text: name,
                    textVerticalAlign: 'middle',
                    left: 'center',
                    top: 120,
                    textStyle: {
                        fontSize: 16,
                        lineHeight: 18,
                        color: '#666666',
                    },
                },
                // legend: {
                //     orient: 'vertical',
                //     left: 10,

                // },
                legend: {
                    itemWidth: 10,
                    itemHeight: 10,
                    orient: 'vertical',
                    left: 10,
                    bottom: 0,
                    icon: 'rect',
                },
                tooltip: {
                    show: true,
                    trigger: 'item',
                    extraCssText: 'text-align: left;',
                },
                series: [
                    {
                        name: this.name,
                        type: 'pie',
                        center: ['50%', 120],
                        radius: [55, 73],
                        hoverOffset: 5,
                        avoidLabelOverlap: false,
                        label: {
                            show: true,
                            position: 'outside',
                            fontSize: '12',
                            fontWeight: 'bold',
                            formatter: '{r|}{a|{b}}\n{b|{d}%}',
                            lineHeight: 17,
                            rich: {
                                r: {
                                    width: 10,
                                    height: 10,
                                    backgroundColor: 'red',
                                },
                                a: {
                                    color: '#333333',
                                    fontSize: 12,
                                    align: 'center',
                                    padding: [0, 0, 0, 5],
                                },
                                b: {
                                    color: '#333333',
                                    fontSize: 11,
                                    align: 'center',
                                },
                            },
                        },
                        labelLine: {
                            show: true,
                            length: 20,
                            length2: 20,
                        },
                        data: [],
                        z: 3,
                    },
                    {
                        name: '明细',
                        type: 'pie',
                        center: ['50%', 120],
                        radius: [82, 100],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
                        },
                        data: [],
                    },
                ],
            }
            const seriesData0 = []
            const seriesData1 = []
            const colors = doublePlate[this.colorIndex % doublePlate.length]
            this.data.forEach(({ name, value, child }, m) => {
                const cj = colors[m % colors.length]
                seriesData0.push({
                    name,
                    value,
                    itemStyle: { color: cj.color },
                    label: {
                        rich: {
                            r: {
                                backgroundColor: cj.color,
                            },
                        },
                    },
                })
                const childCj = cj.child
                child.forEach(({ name, value }, n) => {
                    seriesData1.push({
                        name,
                        value,
                        itemStyle: { color: childCj[n % childCj.length] },
                    })
                })
            })
            option.series[0].data = seriesData0
            option.series[1].data = seriesData1
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
._QualityAnalysisPie_root {
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
