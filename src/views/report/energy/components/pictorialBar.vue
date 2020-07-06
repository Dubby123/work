<template>
    <div>
        <my-echarts id="echarts" :options="echartsOptions"></my-echarts>
    </div>
</template>
<script>
import MyEcharts from '@/components/echarts'
export default {
    name: 'pictorialBar',
    components: { MyEcharts },
    data() {
        return {
            echartsOptions:{
            tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function (params) {
            return params[0].name + ': ' + params[0].value;
        }
    },
    xAxis: {
        data: ['驯鹿', '火箭', '飞机', '高铁', '轮船', '汽车', '跑步', '步行', ],
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            color: '#e54035'
        }
    },
    yAxis: {
        splitLine: {show: false},
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {show: false}
    },
    color: ['#e54035'],
    series: [{
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '-130%',
        itemStyle: {
            opacity: 0.5
        },
        emphasis: {
            itemStyle: {
                opacity: 1
            }
        },
        data: [123, 60, 25, 18, 12, 9, 2, 1],
        z: 10
    }]

            }

        }
    }
}