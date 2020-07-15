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
      <mud-treatment-statistics-month />
    </div>
    <div v-if="type==='year'">
      <mud-statistics-year />
      <inlet-analysis-year />
      <mud-treatment-statistics-year />
    </div>
  </div>
</template>
<script>
import MudStatistics from "./module/MudStatistics";
import EffluentAnalysis from "./module/EffluentAnalysis";
import InletAnalysis from "./module/InletAnalysis";
import MudStatisticsMonth from "./moduleMonth/MudStatisticsMonth";
import InletAnalysisMonth from "./moduleMonth/InletAnalysisMonth";
import MudTreatmentStatisticsMonth from "./moduleMonth/MudTreatmentStatisticsMonth";
import MudStatisticsYear from "./moduleYear/MudStatisticsYear";
import InletAnalysisYear from "./moduleYear/InletAnalysisYear";
import MudTreatmentStatisticsYear from "./moduleYear/MudTreatmentStatisticsYear";

export default {
  name: "mud",
  components: {
    MudStatistics,
    EffluentAnalysis,
    InletAnalysis,
    MudStatisticsMonth,
    InletAnalysisMonth,
    MudTreatmentStatisticsMonth,
    MudStatisticsYear,
    InletAnalysisYear,
    MudTreatmentStatisticsYear
  },
  data() {
    return {
      type: "month",
      MonthTime: "month"
    };
  },
  created() {},
  methods: {
    showType(val) {
      this.type = val;
    },
    selectTime(val) {
      this.MonthTime = val;
    }
  }
};
</script>
<style scoped lang="less"></style>
