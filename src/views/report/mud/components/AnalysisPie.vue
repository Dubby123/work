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
// import { doublePlate } from '../../../../utils'

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
                    name: '老区流量',
                    value: 33039,
                },
                {
                    name: '新区流量',
                    value: 60002,
                },
            ],
        },
        color: {
            type: Array,
            default: () => ['#6fbcf8', '#ffc785', ],
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
            // let name = this.name;
            const option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                series: [
                    {
                        name: '姓名',
                        type: 'pie',
                        radius: '50%',
                        center: ['50%', '40%'],
                        labelLine: {
                            smooth: 0.2,
                            length: 20,
                            length2: 30,
                        },
                        label: {
                            show: true,
                            position: 'outside',
                            formatter: '{hr|}{a|{b}\n{d}%}',
                            rich: {
                                hr: {
                                    backgroundColor: 't',
                                    width: 10,
                                    height: 10,
                                    padding: [3, 3, 0, 0],
                                },
                                a: {
                                      color: '#666666',
                                    fontSize: 12,
                                    align: 'center',
                                    padding: [5, 5, 5, 5],
                
                                },
                            },
                        },
                        // label: {
                        //     show: true,
                        //     position: 'outside',
                        //     fontSize: '12',
                        //     fontWeight: 'bold',
                        //     formatter: '{r|}{a|{b}}\n{d}',
                        //     lineHeight: 17,
                        //     rich: {
                        //         r: {
                        //             backgroundColor: 't',
                        //             width: 10,
                        //             height: 10,
                        //         },
                        //         a: {
                        //             color: '#333333',
                        //             fontSize: 12,
                        //             align: 'center',
                        //             padding: [0, 0, 0, 5],
                        //         },
                        //         b: {
                        //             color: '#333333',
                        //             fontSize: 11,
                        //             align: 'center',
                        //         },
                        //     },
                        // },
                        // data: data.seriesData,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                            },
                        },
                    },
                ],
            }
            option.series[0].data = this.data
            option.color = this.color
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
