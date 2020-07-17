<template>
    <div>
        <time-button @triggerTime="showType" />
        <div v-if="type === 'date'">
            <energy-statistics />
            <medicine-analysis />
        </div>
        <div v-if="type === 'month'">
            <energy-statistics-month />
            <contrastive-analysis-month />
            <medicine-analysis-Month />
        </div>
        <div v-if="type === 'year'">
            <energy-statistics-year />
            <contrastive-analysis-year />
            <medicine-analysis-year />
        </div>
    </div>
</template>
<script>
import EnergyStatistics from './module/EnergyStatistics'
import MedicineAnalysis from './module/MedicineAnalysis'

import EnergyStatisticsMonth from './moduleMonth/EnergyStatisticsMonth'
import ContrastiveAnalysisMonth from './moduleMonth/ContrastiveAnalysisMonth'
import MedicineAnalysisMonth from './moduleMonth/MedicineAnalysisMonth'

import EnergyStatisticsYear from './moduleYear/EnergyStatisticsYear'
import ContrastiveAnalysisYear from './moduleYear/ContrastiveAnalysisYear'
import MedicineAnalysisYear from './moduleYear/MedicineAnalysisYear'
export default {
    name: 'mud',
    components: {
        MedicineAnalysis,
        EnergyStatistics,
        EnergyStatisticsMonth,
        ContrastiveAnalysisMonth,
        MedicineAnalysisMonth,
        EnergyStatisticsYear,
        ContrastiveAnalysisYear,
        MedicineAnalysisYear,
    },
    data() {
        return {
            type: 'month',
        }
    },
    created() {},
    methods: {
        showType(val) {
            this.type = val
        },
    },
}
</script>
<style scoped lang="less"></style>
