<!-- 流量水质统计 -->
<template>
    <div class="_EnergyStatistics_root">
        <sub-title name="当日电耗统计" />
        <div class="content">
            <rect-box>
                <engrgy-top :data="myData" />
                <flow-analysis-pie />
            </rect-box>
            <rect-box>
                <engrgy-top :data="myData1" />
                <flow-analysis-rader />
            </rect-box>
        </div>
    </div>
</template>

<script>
import EngrgyTop from '../../components/EngrgyTop'
import FlowAnalysisPie from '../../components/FlowAnalysisPie'
import FlowAnalysisRader from '../../components/FlowAnalysisRader'
export default {
    name: 'EnergyStatistics',
    components: {
        EngrgyTop,
        FlowAnalysisPie,
        FlowAnalysisRader,
    },
    data() {
        return {
            myData: {
                name: '累计耗电量',
                value: 321256,
                unit: '单位:MWH',
                rate: -8,
            },
            myData1: {
                name: '单位耗电量',
                value: 1541,
                unit: '单位:MWH',
                rate: -8,
            },
        }
    },
}
</script>

<style lang="less" scoped>
._EnergyStatistics_root {
    position: relative;
    .content {
        margin-top: 20px;
        width: 100%;
        height: 444px;
        display: flex;
        justify-content: space-between;
        .item-swapper {
            width: 33%;
        }
    }
}
</style>
