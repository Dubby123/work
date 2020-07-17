<!-- WaterLineChart -->
<template>
    <div>
        <sub-title name="当月水质分析" />
        <rect-box class="_SewageAnalysis_root">
            <div class="_SewageAnalysis_top">
                <div>
                    <span class="title">生活污水水质平均值分析</span>
                    <span class="subTitle">水质类型</span>
                    <my-select />
                </div>
                <month-but @handleTime="selectTime" />
            </div>
            <sewage-analysis class="mian_box" />
        </rect-box>
    </div>
</template>

<script>
import SewageAnalysis from '../../components/SewageAnalysis'
export default {
    components: { SewageAnalysis },
    data() {
        return {}
    },
    methods: {
        selectTime() {},
    },
}
</script>

<style lang="less" scoped>
._SewageAnalysis_root {
    position: relative;
    width: 100%;
    height: 348px;
    margin-top: 20px;
    ._SewageAnalysis_top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 15px;
        .title {
            font-size: 14px;
            color: #666666;
            margin-right: 20px;
        }
        .subTitle {
            color: #999999;
            margin-right: 20px;
        }
    }
    .mian_box {
        height: 77%;
    }
}
</style>
