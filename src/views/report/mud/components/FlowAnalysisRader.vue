<!-- QualityAnalysisPie -->
<template>
    <div class="_FlowAnalysisRader_root">
        <div class="chart-root" ref="chart_dom"></div>
 
    </div>
</template>
<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/radar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
// import { doublePlate } from '../../../../utils'

export default {
    name: 'FlowAnalysisRader',
    props: {
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
            // let name = this.name
            // if (name.length > 4) {
            //   name = name.substring(0, 4) + '\n' + name.substring(4, name.length);
            // }
            const option = {
                tooltip: {
                    show: true,
                    trigger: 'item',
                    // padding: [5, 10],
                    formatter: function(params) {
                        let parm = [
                            {
                                name: '攻击途径',
                                max: 10,
                            },
                            {
                                name: '攻击难度',
                                max: 10,
                            },
                            {
                                name: '权限要求',
                                max: 10,
                            },
                            {
                                name: '机密性影响',
                                max: 10,
                            },
                            {
                                name: '完整性影响',
                                max: 10,
                            },
                            {
                                name: '可用性影响',
                                max: 10,
                            },
                        ]
                        let obj = ''
                        for (let i = 0; i < parm.length; i++) {
                            obj =
                                obj +
                                '<div style="display: flex;align-items:center;justify-content:space-between;"><span>' +
                                parm[i].name +
                                '：</span><span style="margin-left:5px">' +
                                params.data.value[i] +
                                '分</span></div>\n'
                        }
                        return params.seriesName + obj
                    },
                },
                legend: {
                    show: true,
                    data: ['风险评估'],
                },
                radar: {
                    radius: '50%',
                    center: ['50%', '40%'],
                    shape: 'circle',
                    splitNumber: 3,
                    name: {
                        textStyle: {
                            color: '#666666',

                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#409ee6',
                        },
                    },
                    splitArea: {
                        areaStyle: {
                            color: ['transparent'],
                        },
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#409ee6',
                        },
                    },
                    indicator: [
                        {
                            name: '攻击途径',
                            max: 10,
                        },
                        {
                            name: '攻击难度',
                            max: 10,
                        },
                        {
                            name: '权限要求',
                            max: 10,
                        },
                        {
                            name: '机密性影响',
                            max: 10,
                        },
                        {
                            name: '完整性影响',
                            max: 10,
                        },
                        {
                            name: '可用性影响',
                            max: 10,
                        },
                    ],
                },
                series: [
                    {
                        name: '风险评估',
                        type: 'radar',
                        symbol: 'emptyCircle', // 拐点的样式，还可以取值
                        symbolSize: 10, // 拐点的大小
                        borderType:'dashed',
                        itemStyle: {
                            normal: {
                                color: '#ffffff',
                                borderColor: '#228ee1',
                                borderWidth: 1,
                                background: '#ffffff'
                            },
                             opacity: 0.2
                             
                        },
                        areaStyle: {
                            normal: {
                                width: 1,
                                opacity: 0.7,
                            },
                        },
                        data: [
                            {
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            0,
                                            0,
                                            0,
                                            1, //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                                            [
                                                {
                                                    offset: 0,
                                                    color: '#aedbfe ',
                                                },
                                                {
                                                    offset: 1,
                                                    color: '#228ee1 ',
                                                    
                                                },
                                            ] //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                                        ),
                                    },
                                },
                                value: [3, 5, 8, 9, 10, 8],
                            },
                        ],
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
