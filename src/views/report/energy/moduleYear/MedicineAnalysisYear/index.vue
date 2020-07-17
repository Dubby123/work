<!-- 流量水质统计 -->
<template>
    <div class="_MedicineAnalysis_root">
        <sub-title name="当月药耗统计" />
        <div class="content">
            <rect-box class="_PanelOne_root">
                <div class="_PanelOne_top">
                    <div class="left">
                        <img src="../../components/icon/Industry.png" />
                        工业污水药耗
                    </div>
                    <span class="right">单位:吨 <month-but /> </span>
                </div>
                <analysis-gallery class="_PanelOne_mian" />
            </rect-box>
            <rect-box class="_PanelOne_root">
                <div class="_PanelOne_top">
                    <div>
                        工业污水药耗<span class="type">分析类型</span><my-select/>
                    </div>
                    <month-but/>

                </div>
                <mix-line-bar class="_PanelOne_mian" />
            </rect-box>
        </div>
        <div class="content">
            <rect-box class="_PanelOne_root"> 
                 <div class="_PanelOne_top">
                    <div class="left">
                        <img src="../../components/icon/life.png" />
                        工业污水药耗
                    </div>
                    <span class="right">单位:吨 <month-but /> </span>
                </div>
                <analysis-gallery class="_PanelOne_mian" /></rect-box>
            <rect-box class="_PanelOne_root"> 
                 <div class="_PanelOne_top">
                    <div class="left">
                        <img src="../../components/icon/mudhandle.png" />
                        工业污水药耗
                    </div>
                    <span class="right">单位:吨 <month-but /> </span>
                </div>
                <analysis-gallery  class="_PanelOne_mian"/></rect-box>
        </div>
    </div>
</template>

<script>
import AnalysisGallery from '../../components/AnalysisGallery'
import MixLineBar from '../../components/MixLineBar'
export default {
    components: {
        AnalysisGallery,
        MixLineBar,
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
._MedicineAnalysis_root {
    position: relative;
    .content {
        margin-top: 20px;
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: space-between;
        ._PanelOne_root {
            width: 49%;
            margin: 20 auto;
            ._PanelOne_top {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px 10px;
                img {
                    max-width: 37px;
                    max-height: 100%;
                    vertical-align: middle;
                }
                .type{
                    color: #999999;
                    margin:  0 10px 0 15px;
                }
            }
             ._PanelOne_mian {
                    height: 234px;
                }
        }
    }
}
</style>
