<!-- 流量水质统计 -->
<template>
  <div class="_InletAnalysis_root">
    <sub-title name="回流废水统计" />
    <div class="content">
      <rect-box>
        <min-title title="回流废水流量">
          <month-but />
        </min-title>
        <flow-analysis-bar class="main_panel" />
      </rect-box>
    </div>
    <div class="content">
      <rect-box>
        <min-title title="回流废水浓度" unit="g/L">
          <month-but />
        </min-title>
        <flow-analysis-line class="main_panel" />
      </rect-box>
    </div>
  </div>
</template>

<script>
import FlowAnalysisBar from "../../components/FlowAnalysisBar";
import FlowAnalysisLine from "../../components/FlowAnalysisLine";
export default {
  name: "InletAnalysis",
  components: {
    FlowAnalysisBar,
    FlowAnalysisLine
  },

  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
._InletAnalysis_root {
  position: relative;
  .content {
    margin-top: 20px;
    width: 100%;
    height: 365px;
  }
  .main_panel {
    height: 80%;
  }
}
</style>
