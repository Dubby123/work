<!-- 进水水质分析 -->
<template>
    <rect-box class="_InletAnalysis_root">
        <min-title title="进水水质分析" unit="mg/L">
            <span slot="left" class="type"
                >分析类别<my-select style=" margin-left: 10px;"
            /></span>
        </min-title>
        <inlet-analysis-bar class='main_box' />
    </rect-box>
</template>
<script>
import InletAnalysisBar from '../../components/InletAnalysisBar'
export default {
    name: 'InletAnalysis',
    components: { InletAnalysisBar },
    data() {
        return {}
    },
}
</script>
<style lang="less" scoped>
._InletAnalysis_root {
    position: relative;
    width: 100%;
    height: 344px;
    margin-top: 25px;
    .type {
        font-size: 14px;
        color: #999999;
        margin-left:20px;
    }
    .main_box{
        height: 80%;
    }
}
</style>
