<!-- 流量水质统计 -->
<template>
    <div class="_EffluentAnalysis_root">
        <sub-title name="回流废水统计" />
        <div class="content">
            <rect-box>
                <mud-top :data="myData" />
                <analysis-pie :data="pieData" />
            </rect-box>
            <rect-box>
                <mud-top  :data="myData1"/>
                <analysis-pie :data="pieData1"  />
            </rect-box>
        </div>
    </div>
</template>

<script>
import MudTop from '../../components/MudTop'
import AnalysisPie from '../../components/AnalysisPie'

export default {
    name: 'EffluentAnalysis',
    components: {
        MudTop,
        AnalysisPie,
    },
    data() {
        return {
            myData: {
                name: '累计泥饼量',
                value: 321256,
                unit: '吨',
                rate: -8,
            },
            myData1: {
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
        height: 444px;
        display: flex;
        justify-content: space-between;
        .item-swapper {
            width: 33%;
        }
    }
}
</style>
