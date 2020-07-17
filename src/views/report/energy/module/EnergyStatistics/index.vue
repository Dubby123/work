<!-- 流量水质统计 -->
<template>
    <div class="_EnergyStatistics_root">
        <sub-title name="当日电耗统计" />
        <div class="content">
            <rect-box class="_PanelOne_root">
                <title-panel :data="myData" />
                <div class="line"></div>
                <flow-analysis-pie />
            </rect-box>
            <rect-box class="_PanelOne_root">
                <title-panel :data="myData1" />
                <div class="line"></div>
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
        height: 432px;
        display: flex;
        justify-content: space-between;
            ._PanelOne_root {
            width: 49%;
            padding-top:20px;
            margin: 20 auto;
            .line {
                margin: 20px auto;
                width: 80%;
                height: 0px;
                border: dotted 1px #e6e6e6;
            }
           
        }
    }
}
</style>
