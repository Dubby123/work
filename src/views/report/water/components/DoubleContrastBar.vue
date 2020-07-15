<template>
    <my-echarts
        :options="echartsOptions"
        ref="double_contrast_bar"
        class="chart_box"
    ></my-echarts>
</template>
<script>
import echarts from 'echarts'
export default {
    name: 'DoubleContrastBar',
    props: {
        myData: {
            type: Array,
            default: () => [
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
        },
    },
    data() {
        return {
            echartsOptions: '',
        }
    },
    mounted() {
        window.onresize = () => {
            console.log(this.$refs.double_contrast_bar)
            this.$refs.double_contrast_bar.reSize()
        }
    },
    created() {
        this.echartsOptions = this.optionsCreate()
    },

    methods: {
        optionsCreate() {
            let Xdata = Array.from({ length: 30 }, (v, k) => k + 1)
            const option = {
                legend: {
                 itemWidth:10,
                 itemHeight:10,
                },
                color: ['#ffd5ab', '#f27e15', '#9ed5ff', '#269ffb'],
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
                        var res = ''
                        for (var i = 0, l = params.length; i < l; i++) {
                            res += `<div style='overflow: hidden;'>
                <span style='float: left;margin-right:20px;'>
                    <span style="display:inline-block;margin-right:10px;width:10px;height:10px;background-color:${params[i].color}"></span><span>${params[i].seriesName}</span></span>
                <span style="float: right;">${params[i].value}</span>
            </div>`
                        }
                        return res
                    },
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
                series: [
                    {
                        name: '工业进水',
                        type: 'bar',
                        stack: '进水',
                        data: [],
                        barWidth: 8,
                    },
                    {
                        name: '生活进水',
                        type: 'bar',
                        stack: '进水',
                        data: [],
                        barWidth: 8,
                    },
                    {
                        name: '生活排水',
                        type: 'bar',
                        stack: '排水',
                        data: [],
                        barWidth: 8,
                    },
                    {
                        name: '工业排水',
                        type: 'bar',
                        stack: '排水',
                        data: [],
                        barWidth: 8,
                    },
                    {
                        data: [],
                        type: 'line',
                        smooth: true,
                        name: '总进水',
                        symbol: 'none',
                        lineStyle: {
                            // 系列级个性化折线样式
                            width: 3,
                            type: 'solid',
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: '#ef6e18',
                                    },
                                    {
                                        offset: 1,
                                        color: '#fcc204',
                                    },
                                ]
                            ), //线条渐变色
                        },
                    },
                    {
                        data: [],
                        type: 'line',
                        smooth: true,
                        name: '总排水',
                        symbol: 'none',
                        lineStyle: {
                            // 系列级个性化折线样式
                            width: 3,
                            type: 'solid',
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: '#0336ff',
                                    },
                                    {
                                        offset: 1,
                                        color: '#01b4ff',
                                    },
                                ]
                            ), //线条渐变色
                        },
                    },
                ],
            }
            const YData = this.myData[0].children[0].value
            const YData1 = this.myData[0].children[1].value
            const YData2 = this.myData[1].children[0].value
            const YData3 = this.myData[1].children[1].value
            option.series[0].data = YData
            option.series[1].data = YData1
            option.series[2].data = YData2
            option.series[3].data = YData3

            option.series[4].data = YData.map((v, i) => {
                return v + YData1[i]
            })
            option.series[5].data = YData2.map((v, i) => {
                return v + YData3[i]
            })
            return option
        },
    },
}
</script>

<style lang="less" scoped>
.chart_box {
    position: relative;

    height: 80%;
}
</style>
