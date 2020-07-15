<!-- 流量水质统计 -->
<template>
    <div class="_EnergyStatistics_root">
        <sub-title name="当月电耗统计" />
        <div class="content">
            <rect-box >
                <title-panel :data="myData" />
                <div class="upper">
                    <flow-analysis-pie />
                </div>
                <div class="under">
                    <sub-line-chart />
                </div>
            </rect-box>
            <rect-box >
                <title-panel :data="myData1" />
                <div class="upper">
                    <flow-analysis-rader />
                </div>
                <div class="under">
                    <sub-line-chart />
                </div>
            </rect-box>
        </div>
    </div>
</template>

<script>
import TitlePanel from '../../../components/TitlePanel'
import FlowAnalysisPie from '../../../components/FlowAnalysisPie'
import FlowAnalysisRader from '../../components/FlowAnalysisRader'
import SubLineChart from '../../../components/SubLineChart'
export default {
    name: 'EnergyStatistics',
    components: {
        TitlePanel,
        FlowAnalysisPie,
        FlowAnalysisRader,
        SubLineChart,
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
        height: 652px;
        display: flex;
        justify-content: space-between;
        .upper {
            height: 218px;
        }
        .under {
            height: 238px;
        }
    }
}
</style>
