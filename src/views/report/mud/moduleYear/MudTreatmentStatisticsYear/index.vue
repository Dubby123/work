<template>
  <div class="_MudStatistics_root">
    <sub-title name="当月进泥量" />
    <div class="content">
      <rect-box>
        <min-title title="泥饼量">
          <month-but slot="right"/>
        </min-title>
        <comparison-bar class="main_panel" />
      </rect-box>
    </div>
    <div class="content">
      <rect-box>
        <min-title title="处置量">
          <month-but slot="right" />
          123332
        </min-title>
        <stack-analysis-bar :color="color" :data="data" class="main_panel" />
      </rect-box>
    </div>
  </div>
</template>

<script>
import ComparisonBar from "../../../components/ComparisonBar";
import StackAnalysisBar from "../../../components/StackAnalysisBar";
export default {
  name: "MudTreatmentStatisticsMonth",
  components: { ComparisonBar, StackAnalysisBar },
  data() {
    return {
      color: ["#6fbcf8", "#ffaa47", "#ff6f00"],
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

  .main_panel {
    height:80%;
  }
}
</style>
