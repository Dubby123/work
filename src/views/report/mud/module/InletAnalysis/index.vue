<!-- 流量水质统计 -->
<template>
    <div class="_InletAnalysis_root">
        <sub-title name="回流废水统计" />
        <div class="content">
            <rect-box class="_PanelOne_root">
                <title-panel :data="myData" />
                 <div class="line"></div>
                <analysis-pie />
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
import AnalysisPie from '../../components/AnalysisPie'
import FlowAnalysisRader from '../../components/FlowAnalysisRader'
import icon from '../../components/icon/mud.png'
export default {
    name: 'InletAnalysis',
    components: {
        TitlePanel,
        AnalysisPie,
        FlowAnalysisRader,
    },
    data() {
        return {
            myData: {
                icon:icon,
                name: '累计回流废水流量',
                value: 321256,
                unit: '㎡',
                rate: -8,
            },
            myData1: {
                   icon:icon,
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
