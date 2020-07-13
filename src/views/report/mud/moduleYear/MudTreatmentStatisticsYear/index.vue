<template>
  <div class="_MudStatistics_root">
    <sub-title name="当月进泥量" />

    <div class="upper">
      <rect-box>
        <comparison-bar />
      </rect-box>
    </div>
    <div class="under">
      <rect-box>
        <flowAnalysis-bar :color="color" :data="data" />
      </rect-box>
    </div>
  </div>
</template>

<script>
import ComparisonBar from "../../components/ComparisonBar";
import FlowAnalysisBar from "../../components/FlowAnalysisBar";
export default {
  name: "MudTreatmentStatistics",
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
.upper {
  height: 365px;
}
.under {
  margin-top: 20px;
  height: 365px;
}
</style>
