<template>
    <div class="water-root">
        <!--    <water-top />-->
        <div v-if="false">
            <flow-water-statistics-data />
            <water-bar-chart />
        </div>
        <div v-else>

            <flow-water-statistics-month />
            <!-- <water-comparison-chart /> -->
            <sewage-analysis/>
        </div>
    </div>
</template>
<script>
import FlowWaterStatisticsData from './module/FlowWaterStatisticsData'
import FlowWaterStatisticsMonth from './module/FlowWaterStatisticsMonth'
import WaterBarChart from './module/FlowWaterStatisticsData/WaterBarChart'
// import WaterComparisonChart from './module/FlowWaterStatisticsMonth/WaterComparisonChart'
import SewageAnalysis from './module/FlowWaterStatisticsMonth/SewageAnalysis'
// import waterTop from './components/waterTop';

export default {
    data() {
        return {}
    },
    components: {
        FlowWaterStatisticsData,
        WaterBarChart,
        FlowWaterStatisticsMonth,
        // WaterComparisonChart,
        SewageAnalysis
        // waterTop,
    },
}
</script>
<style scoped lang="less">
.water-root {
    position: relative;
    width: 100%;
}
</style>
