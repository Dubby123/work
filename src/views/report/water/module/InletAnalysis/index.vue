<!-- 进水水质分析 -->
<template>
  <rect-box class="_InletAnalysis_root">
    <div class="title-swapper">
      <div class="legend-swapper">
        <span class="name">进水水质分析</span>
        <span class="type">分析类别</span>
      </div>
      <span class="unit">单位:mg/L</span>
    </div>
  </rect-box>
</template>

<script>

  export default {
    name: 'InletAnalysis',
  };
</script>

<style lang="scss" scoped>
  ._InletAnalysis_root {
    position: relative;
    width: 100%;
    height: 344px;
    margin-top: 25px;
    padding-top: 15px;
    .title-swapper {
      width: 100%;
      height: 25px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      .legend-swapper {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .name {
          font-size: 14px;
          color: #666666;
          margin-right: 20px;
        }
        .type {
          font-size: 14px;
          color: #999999;
        }
      }
      .unit {
        margin-left: 20px;
        font-size: 12px;
        color: #999999;
      }
    }
  }
</style>
