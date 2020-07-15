<!-- 流量水质统计 -->
<template>
    <div class="_EnergyStatistics_root">
        <sub-title name="当日电耗统计" />
        <div class="content">
            <rect-box>
                <title-panel :data="myData" />
                <flow-analysis-pie />
            </rect-box>
            <rect-box>
                <title-panel :data="myData1" />
                <flow-analysis-rader />
            </rect-box>
        </div>
    </div>
</template>

<script>
import TitlePanel from '../../../components/TitlePanel'
import FlowAnalysisPie from '../../../components/FlowAnalysisPie'
import FlowAnalysisRader from '../../components/FlowAnalysisRader'
import icon1 from '../../components/icon/energy-l.png'
import icon2 from '../../components/icon/energy-r.png'
export default {
    name: 'EnergyStatistics',
    components: {
        TitlePanel,
        FlowAnalysisPie,
        FlowAnalysisRader,
    },
    data() {
        return {
            myData: {
                icon: icon1,
                name: '累计耗电量',
                value: 321256,
                unit: '单位:MWH',
                rate: -8,
            },
            myData1: {
                icon: icon2,
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
