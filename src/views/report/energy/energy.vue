<template>
  <div>
    <time-button @triggerTime="showType" />
    <div v-if="type==='date'">
      <energy-statistics />
      <medicine-analysis />
    </div>
    <div v-if="type==='month'">
      月
    </div>
    <div v-if="type==='year'">
      年报表
    </div>
  </div>
</template>
<script>
import EnergyStatistics from "./module/EnergyStatistics";
import MedicineAnalysis from "./module/MedicineAnalysis";
export default {
  name: "mud",
  components: { MedicineAnalysis, EnergyStatistics },
  data() {
    return {
      type: "month"
    };
  },
  created() {},
  methods: {
    showType(val) {
        this.type = val

    }
  }
};
</script>
<style scoped lang="less"></style>
