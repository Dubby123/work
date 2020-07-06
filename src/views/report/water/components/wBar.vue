<template>
    <div>
        <my-echarts id="echarts" :options="echartsOptions"></my-echarts>
    </div>
</template>
<script>
var echarts = require('echarts')
import MyEcharts from '@/components/echarts'
var dataAxis = [
    '生活污水总计',
    '工业市排',
    '工业区排',
    '工业污水总计',
    '二期合计',
    '三期合计',
]
var data = [10, 52, 200, 334, 390, 330, 220]
var yMax = 500
var dataShadow = []

for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax)
}

export default {
    name: 'other',
    components: { MyEcharts },

    data() {
        return {
            echartsOptions: {
                title: {
                    text: '进水水质分析',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                    },
                },
                xAxis: {
                    type: 'value',
                },
                yAxis: {
                    type: 'category',
                    data: dataAxis,
                },
                series: [
                    {
                        // For shadow
                        type: 'bar',
                        itemStyle: {
                            color: 'rgba(0,0,0,0.05)',
                        },
                        barGap: '-100%',
                        barCategoryGap: '40%',
                        data: dataShadow,
                        animation: false,
                    },
                    {
                        type: 'bar',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    { offset: 0, color: '#F07317' },
                                    { offset: 0.5, color: '#F69D0D' },
                                    { offset: 1, color: '#F69D0D' },
                                ]
                            ),
                        },
                        emphasis: {
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        { offset: 0, color: '#F69D0D' },
                                        { offset: 0.7, color: '#F69D0D' },
                                        { offset: 1, color: '#F07317' },
                                    ]
                                ),
                            },
                        },
                        data: data,
                    },
                ],
            },
        }
    },
}
</script>
