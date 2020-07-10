<template>
    <div>
        <energy-statistics />
         <medicine-analysis />
    </div>
</template>
<script>
import EnergyStatistics from './module/EnergyStatistics'
import MedicineAnalysis from './module/MedicineAnalysis'
export default {
    name: 'mud',
    components: { MedicineAnalysis, EnergyStatistics },
    data() {
        return {}
    },
    created() {},
    methods: {},
}
</script>
<style scoped lang="less"></style>
