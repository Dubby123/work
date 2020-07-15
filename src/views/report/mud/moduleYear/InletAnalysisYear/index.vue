<!-- 流量水质统计 -->
<template>
    <div class="_InletAnalysis_root">
        <sub-title name="回流废水统计" />
        <div class="content">
            <rect-box>
                <stack-analysis-bar />
            </rect-box>
        </div>
        <div class="content">
            <rect-box>
                <flow-analysis-line />
            </rect-box>
        </div>
    </div>
</template>

<script>
import StackAnalysisBar from '../../../components/StackAnalysisBar'
import FlowAnalysisLine from '../../components/FlowAnalysisLine'
export default {
    name: 'InletAnalysis',
    components: {
        StackAnalysisBar,
        FlowAnalysisLine,
    },

    data() {
        return {}
    },
}
</script>

<style lang="less" scoped>
._InletAnalysis_root {
    position: relative;
    .content {
        margin-top: 20px;
        width: 100%;
        height: 365px;
    }
}
</style>
