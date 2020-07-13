<template>
  <div class="_MudStatistics_root">
    <sub-title name="当月进泥量" />
    <div class="content">
      <rect-box>
        <div class="title_panel">
          <span>泥饼量</span>
          <span>
            <span class="right">单位:吨</span>
            <year-but />
          </span>
        </div>
          <comparison-bar class="main_panel"  />
      </rect-box>
    </div>
    <div class="content">
      <rect-box>
        <div class="title_panel">
          <span>处置量</span>
          <span>
            <span class="right">单位:吨</span>
            <year-but />
          </span>
        </div>
        <flowAnalysis-bar :color="color" :data="data"  class="main_panel"/>
      </rect-box>
    </div>
  </div>
</template>

<script>
import ComparisonBar from "../../components/ComparisonBar";
import FlowAnalysisBar from "../../components/FlowAnalysisBar";
export default {
  name: "MudTreatmentStatisticsMonth",
  components: { ComparisonBar, FlowAnalysisBar },
  data() {
    return {
      color: ["#6fbcf8", "#ffaa47", "#ff6f00",],
      data: [
        {
          name: "清能",
          value: [220, 290, 330, 310, 182, 191, 234]
        },
        {
          name: "环兴",
          value: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: "泰普",
          value: [220, 182, 191, 234, 290, 330, 330]
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
._MudStatistics_root {
  position: relative;
  .content {
    margin-top: 20px;
    width: 100%;
    height: 365px;
  }
  .title_panel {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    .right {
      font-size: 12px;
      color: #999999;
      margin-right: 15px;
    }
  }
  .main_panel {
    height: 310px;
  }
}

</style>
