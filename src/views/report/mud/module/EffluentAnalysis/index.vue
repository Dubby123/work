<!-- 流量水质统计 -->
<template>
    <div class="_EffluentAnalysis_root">
        <sub-title name="回流废水统计" />
        <div class="content">
            <rect-box class='_PanelOne_root'>
                <title-panel :data="myData" />
                  <div class="line"></div>
                <analysis-pie :data="pieData" />
            </rect-box>
            <rect-box class="_PanelOne_root">
                <title-panel :data="myData1"/>
                  <div class="line"></div>
                <analysis-pie :data="pieData1"  />
            </rect-box>
        </div>
    </div>
</template>

<script>
import TitlePanel from '../../../components/TitlePanel'
import AnalysisPie from '../../components/AnalysisPie'
import icon from '../../components/icon/mud.png'

export default {
    name: 'EffluentAnalysis',
    components: {
        TitlePanel,
        AnalysisPie,
    },
    data() {
        return {
            myData: {
                icon:icon,
                name: '累计泥饼量',
                value: 321256,
                unit: '吨',
                rate: -8,
            },
            myData1: {
                icon:icon,
                name: '处置量',
                value: 1541,
                unit: '吨',
                rate: -10,
            },
            pieData: [
                {
                    name: '气浮污泥折算量',
                    value: 32002,
                },
                {
                    name: '临时堆场污泥折算量',
                    value: 20002,
                },
                 {
                    name: '浓缩污泥折算量',
                    value: 60002,
                },
            ],
            pieData1: [
                {
                    name: '泰普',
                    value: 32002,
                },
                {
                    name: '清能',
                    value: 50006,
                },
                {
                    name: '环兴',
                    value: 20002,
                },
            ],
        }
    },
}
</script>

<style lang="less" scoped>
._EffluentAnalysis_root {
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
