<template>
    <div>
        <time-button @triggerTime="showType" />
        <div v-if="type==='date'">
            <mud-statistics />
            <inlet-analysis />
            <effluent-analysis />
        </div>
           <div v-if="type==='month'">
            <mud-statistics-month />
            <inlet-analysis-month />
            <mud-treatment-statistics/>
        </div>
    </div>
</template>
<script>
import MudStatistics from './module/MudStatistics'
import EffluentAnalysis from './module/EffluentAnalysis'
import InletAnalysis from './module/InletAnalysis'
import MudStatisticsMonth from './moduleMonth/MudStatisticsMonth'
import InletAnalysisMonth from './moduleMonth/InletAnalysisMonth'
import MudTreatmentStatistics from './moduleMonth/MudTreatmentStatistics'
export default {
    name: 'mud',
    components: { MudStatistics, EffluentAnalysis, InletAnalysis,MudStatisticsMonth,InletAnalysisMonth,MudTreatmentStatistics},
    data() {
        return {
            type:'month',
            MonthTime: 'month',
        }
    },
    created() {},
    methods: {
        showType(val) {
            this.type = val
        },
        selectTime(val) {
            this.MonthTime = val
        },
    },
}
</script>
<style scoped lang="less"></style>
