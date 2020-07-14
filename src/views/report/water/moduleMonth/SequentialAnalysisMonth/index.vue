<!-- WaterLineChart -->
<template>
    <div>
        <sub-title name="环比分析" />
        <rect-box class="_SequentialAnalysis_root">
            <div class="_SequentialAnalysis_top">
                <div>
                    <span class="title">进水环比分析</span>
                    <span class="subTitle">分析类型</span>
                    <my-select />
                </div>
                <month-but @handleTime="selectTime" />
            </div>
            <div class="charts_root">
                <sequential-analysis-bar/>
            </div>
        </rect-box>
        <rect-box class="_SequentialAnalysis_root">
            <div class="_SequentialAnalysis_top">
                <div>
                    <span class="title">排水环比分析</span>
                    <span class="subTitle">分析类型</span>
                    <my-select />
                </div>
                <month-but @handleTime="selectTime" />
            </div>
            <div class="charts_root">
                <sequential-analysis-bar
                    :color="color"
                />
            </div>
        </rect-box>
    </div>
</template>

<script>
import SequentialAnalysisBar from '../../components/SequentialAnalysisBar'
export default {
    name: 'SequentialAnalysis',
    components: { SequentialAnalysisBar },
    data() {
        return {
            MonthTime: '',
            color: ['#269ffb', 'rgba(38,159,251,0.33)'],
        }
    },
    methods: {
        selectTime() {},
    },
}
</script>

<style lang="less" scoped>
._SequentialAnalysis_root {
    width: 100%;
    height: 359px;
    margin-top: 20px;
    ._SequentialAnalysis_top {
        padding: 15px;
        display: flex;
        justify-content: space-between;
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
    .chart-title {
        position: relative;
        height: 80%;
    }
    .charts_root {
        height: 80%;
    }
}
</style>
