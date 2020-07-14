<template>
    <my-echarts
        :options="echartsOptions"
        ref="double_contrast_line"
        class="chart_box"
    ></my-echarts>
</template>
<script>
export default {
    name: 'ComparisonBar',
    props: {
        data: {
            type: Array,
            default: () => [
                {
                    name: 'A2O系统',
                    value: [220, 290, 330, 310, 182, 191, 234],
                },
                {
                    name: 'AO系统',
                    value: [220, 182, 191, 234, 290, 330, 310],
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
            this.$refs.double_contrast_line.reSize()
        }
    },
    created() {
        this.echartsOptions = this.optionsCreate()
    },

    methods: {
        optionsCreate() {
            let Xdata = Array.from({ length: 30 }, (v, k) => k + 1)
            let option = {
                color: ['#ffac3d', '#1696ff'],
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
                    data:Xdata,
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
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: '#FFF',
                    axisPointer: {
                        type: 'shadow', // 默认为直线，可选为：'line'
                    },
                    textStyle: {
                        color: '#666666',
                        fontSize: '12px',
                        lineHeight: 56,
                    },
                    formatter: function(params) {
                        var res = ''
                        for (var i = 0, l = params.length; i < l; i++) {
                            res += ` <div><span style="display:inline-block;margin-right:10px;width:10px;height:10px;background-color:${params[i].color.colorStops[0].color}"></span><span> 
                                 ${params[i].seriesName}</span><span style="float: right; margin-left:10px;">
                                ${params[i].value}</span></div>\n`
                        }
                        return res
                    },
                },
                series: [
                    {
                        name: 'A2O系统',
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#ff6f00', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#ffbc1e', // 100% 处的颜色
                                },
                            ],
                            global: false, // 缺省为 false
                        },
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                    },
                    {
                        name: 'AO系统',
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#0336ff', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#01b4ff', // 100% 处的颜色
                                },
                            ],
                            global: false, // 缺省为 false
                        },
                        data: [820, 656, 956, 934, 454, 1330, 1320],
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                    },
                ],
            }
            console.log('option', option)
            return option
        },
    },
}
</script>

<style lang="less" scoped>
.chart_box {
    position: relative;
    width: 100%;
    height: 80%;
}
</style>
