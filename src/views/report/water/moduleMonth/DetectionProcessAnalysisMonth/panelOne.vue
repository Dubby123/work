<template>
    <rect-box class="_DetectionProcessAnalysis_root">
        <div class="_DetectionProcessAnalysis_top">
            <div>
                <span class="title">AO和A20检测过程</span>
                <span class="subTitle">分析类型</span>
                <my-select />
            </div>
            <month-but @handleTime="selectTime" />
        </div>
        <double-contrast-line class='chart_content'/>
      
    </rect-box>
</template>

<script>
import DoubleContrastLine from '../../components/DoubleContrastLine'
export default {
    data() {
        return {}
    },
    components:{DoubleContrastLine},
    methods: {
        selectTime() {},
    },
}
</script>
<style lang="less" scoped>
._DetectionProcessAnalysis_root {
    position: relative;
    width: 100%;
    height: 359px;
    margin-top: 20px;
    ._DetectionProcessAnalysis_top {
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
    .chart_content {
        position: relative;
        height: 80%;
    }
    
}
</style>
