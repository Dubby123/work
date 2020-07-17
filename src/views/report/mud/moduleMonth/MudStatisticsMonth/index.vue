<!-- 流量水质统计 -->
<template>
    <div class="_MudStatistics_root">
        <sub-title name="当月进泥量" />
        <div class="content">
            <rect-box class="_PanelOne_root">
                <title-panel :data="myData" />
                <div class="line"></div>
                <div class="upper">
                    <flow-analysis-pie />
                </div>
                <div class="under">
                    <sub-line-chart />
                </div>
            </rect-box>
            <rect-box class="_PanelOne_root">
                <title-panel :data="myData1" />
                <div class="line"></div>

                <flow-analysis-rader class="upper" />

                <sub-line-chart class="under" />
            </rect-box>
        </div>
    </div>
</template>

<script>
import TitlePanel from '../../../components/TitlePanel'
import FlowAnalysisPie from '../../../components/FlowAnalysisPie'
import FlowAnalysisRader from '../../components/FlowAnalysisRader'
import SubLineChart from '../../../components/SubLineChart'
import icon from '../../components/icon/mud.png'
export default {
    name: 'MudStatistics',
    components: {
        TitlePanel,
        FlowAnalysisPie,
        FlowAnalysisRader,
        SubLineChart,
    },
    data() {
        return {
            myData: {
                icon: icon,
                name: '进泥流量',
                value: 321256,
                unit: '㎡',
                rate: -8,
            },
            myData1: {
                icon: icon,
                name: '进泥浓度',
                value: 1541,
                unit: 'MWH/吨',
                rate: -8,
            },
        }
    },
}
</script>

<style lang="less" scoped>
._MudStatistics_root {
    position: relative;
    .content {
        margin-top: 20px;
        width: 100%;
        height: 652px;
        display: flex;
        justify-content: space-between;
        ._PanelOne_root {
            width: 49%;
            padding-top: 20px;
            margin: 20 auto;
            .line {
                margin: 20px auto;
                width: 80%;
                height: 0px;
                border: dotted 1px #e6e6e6;
            }
            .upper {
                height: 288px;
            }
            .under {
                height: 238px;
            }
        }
    }
}
</style>
