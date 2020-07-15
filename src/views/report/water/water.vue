<template>
  <div class="water-root">
    <time-button @triggerTime="showType" />
    <div v-if="type === 'date'">
      <flow-water-statistics />
      <quality-analysis />
    </div>
    <div v-if="type === 'month'">
      <flow-water-statistics-month />
      <quality-analysis-month />
      <sewage-analysis-month />
      <sequential-analysis-month />
      <detection-process-analysis-month />
    </div>
    <div v-if="type === 'year'">
      <div v-for='n in 10' style='    display: flex;align-content: space-between;'>
        <div>
          <div
            style="display: inline-block;margin-right:10px;width:10px;height:10px;background-color:red"
          ></div>
          <span>张三 </span>
        </div>
        <div style=" text-align: right;">{{ Math.random()*100 }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import FlowWaterStatistics from './module/FlowWaterStatistics'
import QualityAnalysis from './module/QualityAnalysis'
import FlowWaterStatisticsMonth from './moduleMonth/FlowWaterStatisticsMonth'
import QualityAnalysisMonth from './moduleMonth/QualityAnalysisMonth'
import SewageAnalysisMonth from './moduleMonth/SewageAnalysisMonth'
import SequentialAnalysisMonth from './moduleMonth/SequentialAnalysisMonth'
import DetectionProcessAnalysisMonth from './moduleMonth/DetectionProcessAnalysisMonth'

export default {
  data() {
    return {
      type: 'date',
      MonthTime: '',
    }
  },
  created() {
    console.log('++++', this.$route)
  },
  components: {
    // 当日
    FlowWaterStatistics,
    QualityAnalysis,
    // 按月查看
    FlowWaterStatisticsMonth,
    QualityAnalysisMonth,
    SewageAnalysisMonth,
    SequentialAnalysisMonth,
    DetectionProcessAnalysisMonth,

  },
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
<style scoped lang="less">
  .water-root {
    position: relative;
    width: 100%;

  }
</style>
