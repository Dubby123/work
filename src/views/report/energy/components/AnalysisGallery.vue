<!-- QualityAnalysisPie -->
<template>
    <div class="_AnalysisGallery_root"  v-reload="chart">
        <div class="chart-root" ref="chart_dom"></div>
    </div>
</template>
<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pictorialBar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
// import { doublePlate } from '../../../../utils'

export default {
    name: 'AnalysisGallery',
    props: {
        name: {
            type: String,
            default: '进水来源分析',
        },
        data: {
            type: Array,
            default: () => [
                {
                    name: '20t气浮污泥',
                    value: '2,185',
                },
                {
                    name: '40t气浮污泥',
                    value: '2,417',
                },
                {
                    name: '生活污水系统',
                    value: '2317',
                },
                {
                    name: '生活污水污泥',
                    value: '1001',
                },
                {
                    name: '工业污水污泥',
                    value: '2039',
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
            const option = {
                grid: {
                    left: '20%',
                    top: '25%',
                    bottom: '15%',
                    right: '10%',
                },
                xAxis: {
                    data: [
                        '驯鹿',
                        '火箭',
                        '飞机',
                        '高铁',
                        '轮船',
                        '汽车',
                        '跑步',
                        '步行',
                    ],
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#e6e6e6',
                            // width: 0.5 //这里是为了突出显示加上的
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#666666',
                            fontSize: 12,
                        },
                    },
                },
                yAxis: [
                    {
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#e6e6e6',
                                width: 1, //这里是为了突出显示加上的
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#666666',
                                fontSize: 12,
                            },
                        },
                        splitLine: {
                            show: false,
                        },
                    },
                ],
                series: [
                    {
                        name: 'hill',
                        type: 'pictorialBar',
                        barMinWidth: 153,
                        // barCategoryGap: '-130%',
                        symbol:
                            'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                        // barWidth: '150%',
                        label: {
                            show: true,
                            position: 'top',
                            distance: 15,
                            color: '#333333',
                            fontSize: 16,
                        },
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: '#2f8eec', //  0%  处的颜色
                                        },
                                        // {
                                        //     offset: 0.5,
                                        //     color: '#2BC2CD', //  0%  处的颜色
                                        // },
                                        {
                                            offset: 1,
                                            color: '#28f3af', //  100%  处的颜色
                                        },
                                    ],
                                    global: false, //  缺省为  false
                                },
                                opacity: 0.8
                            
                                
                            },
                            emphasis: {
                                opacity: 1,
                            },
                        },
                        data: [22.56, 14.28, 12.45, 14.28, 12.45],
                        z: 10,
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
._AnalysisGallery_root {
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
