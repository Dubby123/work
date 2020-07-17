<template>
    <div class="_ContrastiveAnalysis_root">
        <sub-title name="对比分析" />

        <rect-box class="content">
            <min-title title="累计耗电">
                <month-but slot="right" />
            </min-title>
            <stack-analysis-bar
                :color="color"
                :data="data"
                class="main_panel"
            />
        </rect-box>
        <rect-box class="content">
            <min-title title="单位耗电">
                <month-but slot="right" />
            </min-title>
            <analysis-rader class="main_panel" />
        </rect-box>
    </div>
</template>

<script>
import AnalysisRader from '../../components/AnalysisRader'
import StackAnalysisBar from '../../../components/StackAnalysisBar'
export default {
    name: 'MudTreatmentStatisticsMonth',
    components: { AnalysisRader, StackAnalysisBar },
    data() {
        return {
            color: ['#6fbcf8', '#ffaa47', '#ff6f00'],
            data: [
                {
                    name: '清能',
                    value: [220, 290, 330, 310, 182, 191, 234],
                },
                {
                    name: '环兴',
                    value: [220, 182, 191, 234, 290, 330, 310],
                },
                {
                    name: '泰普',
                    value: [220, 182, 191, 234, 290, 330, 330],
                },
            ],
        }
    },
}
</script>

<style lang="less" scoped>
._ContrastiveAnalysis_root {
    position: relative;
    .content {
        margin-top: 20px;
        width: 100%;
        height: 356px;
    }

    .main_panel {
        height: 80%;
    }
}
</style>
