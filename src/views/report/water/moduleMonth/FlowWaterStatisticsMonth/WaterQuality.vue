<!-- 进水排水水质 -->
<template>
    <rect-box class="_WaterQuality_root">
        <div class="title-swapper">
            <span class="name">当月累计进水排水统计</span> <span>2020-03</span>
        </div>
    <div class="achievements-wrapper">
        <!-- 模块echarts图表 -->
        <div class="chart-root" ref="chart_dom"></div>
    </div>
    </rect-box>
</template>
<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
export default {
    name: 'WaterQuality',
    data() {
        return {
            myLegend: [
                {
                    name: '总进水',
                    color: ['#ef6e18', '#fcc204'],
                    opacity: 1,
                },
                {
                    name: '生活进水',
                    color: ['#f27e15', '#f27e15'],
                    opacity: 1,
                },
                {
                    name: '工业进水',
                    color: ['#ffd5ab', '#ffd5ab'],
                    opacity: 1,
                },
                {
                    name: '累计排水',
                    color: ['#0336ff', '#01b4ff'],
                    opacity: 1,
                },
                {
                    name: '生活排水',
                    color: ['#269ffb', '#269ffb'],
                    opacity: 0.8,
                },
                {
                    name: '工业排水',
                    color: ['#9ed5ff', '#9ed5ff'],
                    opacity: 0.8,
                },
            ],
            myData: [
                {
                    name: '总进水',
                    data: [],
                    children: [
                        {
                            name: '工业进水',
                            value: [
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
                            ],
                        },
                        {
                            name: '生活进水',
                            value: [
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
                            ],
                        },
                    ],
                },
                {
                    name: '总进水',
                    data: [],
                    children: [
                        {
                            name: '工业进水',
                            value: [
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
                        {
                            name: '生活进水',
                            value: [
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
                },
            ],
        }
    },
    watch: {
        myData() {
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
            if (!this.myData || !Array.isArray(this.myData)) return
            const option = {
                grid: {
                    // show: false,
                    top: '6%',
                    bottom: '5%',
                    left: '4%',
                    right: '4%',
                    containLabel: true,
                },
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: '#FFF',

                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                    },
                    textStyle: {
                        color: '#666666',
                        fontSize: '12px',
                        lineHeight: 56,
                    },
                    formatter: function(params) {
                        console.log(params)
                        var res = ''
                        for (var i = 0, l = params.length; i < l; i++) {
                            res +=
                                '<div> <span style="display:inline-block;margin-right:10px;width:10px;height:10px;background-color:' +
                                params[i].color +
                                '></span><span>' +
                                params[i].seriesName +
                                '</span><span style="float: right; margin-left:10px;">' +
                                params[i].value +
                                '</span></div>\n'
                        }
                        return res
                    },
                },
                xAxis: {
                    type: 'value',
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                },
                yAxis: [
                    {
                        inverse: true,
                        splitLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: false,
                        },
                        axisLabel: {
                            color: '#666666',
                            fontSize: 12,
                            interval: 0,
                            margin: 30,
                            align: 'right',
                            // verticalAlign: 'bottom',
                        },
                        data: [],
                    },
                    {
                        inverse: true,
                        splitLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: false,
                        },
                        axisLabel: {
                            color: '#666666',
                            fontSize: 18,
                            interval: 0,
                            margin: 35,
                            align: 'left',
                            // verticalAlign: 'bottom',
                        },
                        data: [],
                    },
                ],

                series: [
                    // 灰色背景
                    {
                        name: '工业进水',
                        type: 'bar',

                        data: [],
                        itemStyle: {
                            color: '#F3F3F3',
                        },
                        barWidth: 25,
                        tooltip: {
                            show: false,
                        },
                    },
                    {
                        name: '生活进水',
                        type: 'bar',
                        data: [],
                        itemStyle: {
                            color: '#F3F3F3',
                        },
                        barWidth: 25,
                        tooltip: {
                            show: false,
                        },
                    },
                    {
                        name: '生活排水',
                        type: 'bar',
                        data: [],
                        itemStyle: {
                            color: '#F3F3F3',
                        },
                        barWidth: 25,
                        tooltip: {
                            show: false,
                        },
                    },
                    {
                        name: '工业排水',
                        type: 'bar',
                        data: [],
                        itemStyle: {
                            color: '#F3F3F3',
                        },
                        barWidth: 25,
                        tooltip: {
                            show: false,
                        },
                    },
                    {
                        name: '灰色背景',
                        type: 'bar',
                        data: [],
                        itemStyle: {
                            color: '#F3F3F3',
                        },
                        barWidth: 25,
                        tooltip: {
                            show: false,
                        },
                    },
                    {
                        name: '灰色背景',
                        type: 'bar',
                        data: [],
                        itemStyle: {
                            color: '#F3F3F3',
                        },
                        barWidth: 25,
                        tooltip: {
                            show: false,
                        },
                    },
                    // 柱图
                ],
            }
            option.series[0].data = this.myData[0].children[0]
            option.series[1].data = this.myData[0].children[1]
            option.series[2].data = this.myData[1].children[0]
            option.series[3].data = this.myData[1].children[1]
            // option.series[4].data = this.myData[0].children[0].map( (v,i)=>v + this.myData[0].children[1][i])
            //  option.series[5].data = this.myData[1].children[0].map( (v,i)=>v + this.myData[1].children[1][i])
            this.chart.clear()
            this.chart.setOption(option)
        },
    },
}
</script>

<style lang="less" scoped>
._WaterQuality_root {
    position: relative;
    width: 100%;
    height: 365px;
    margin-top: 25px;
    padding-top: 15px;
    // .title-swapper {
    //     width: 100%;
    //     height: 25px;
    //     display: flex;
    //     justify-content: space-between;
    //     align-items: center;
    //     padding: 0 20px;
    //     .name {
    //         font-size: 14px;
    //         color: #666666;
    //     }
    // }

    .chart-swapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        .chart-root{
            width: 100%;
            height: 100%;
        }
  
    }
}
</style>
