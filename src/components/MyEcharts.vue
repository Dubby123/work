<template>
    <div ref="chart_dom" class="chart_root"></div>
</template>

<script>
import echarts from 'echarts'
export default {
    name: 'Chart',
    props: {
        options: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            chart: null, // chart实例,
        }
    },
    watch: {
        option: {
            handler() {
                this.renderChart()
            },
            immediate: true,
            deep: true,
        },
    },
    mounted() {
        this.initChart()
        this.renderChart()
    },
    methods: {
        initChart() {
            if (!this.chart) {
                this.chart = echarts.init(this.$refs.chart_dom)
            }
        },
        renderChart() {
            if (this.chart) {
                this.chart.clear()
                this.chart.setOption(this.options)
            }
        },
        reSize() {
            this.chart.resize({ width: 'auto', height: 'auto' })
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
<style scoped lang="less">
.chart_root {
    width: 100%;
    height: 100%;
}
</style>
