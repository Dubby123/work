<!-- 流量水质统计 -->
<template>
    <div class="_InletAnalysis_root">
        <sub-title name="回流废水统计" />
        <div class="content">
            <rect-box>
                <mud-top :data="myData" />
                <analysis-pie />
            </rect-box>
            <rect-box>
                <mud-top :data="myData1" />
                <flow-analysis-rader />
            </rect-box>
        </div>
    </div>
</template>

<script>
import MudTop from '../../components/MudTop'
import AnalysisPie from '../../components/AnalysisPie'
import FlowAnalysisRader from '../../components/FlowAnalysisRader'
export default {
    name: 'InletAnalysis',
    components: {
        MudTop,
        AnalysisPie,
        FlowAnalysisRader,
    },
    data() {
        return {
            myData: {
                name: '累计回流废水流量',
                value: 321256,
                unit: '㎡',
                rate: -8,
            },
            myData1: {
                name: '累计回流废水浓度',
                value: 1541,
                unit: '㎡',
                rate: -8,
            },
        }
    },
}
</script>

<style lang="less" scoped>
._InletAnalysis_root {
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
