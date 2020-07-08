<template>
    <div>
        <mud-statistics />
        <inlet-analysis />
         <effluent-analysis />
    </div>
</template>
<script>
import MudStatistics from './module/MudStatistics'
import EffluentAnalysis from './module/EffluentAnalysis'
import InletAnalysis from './module/InletAnalysis'

export default {
    name: 'mud',
    components: { MudStatistics, EffluentAnalysis, InletAnalysis },
    data() {
        return {}
    },
    created() {},
    methods: {},
}
</script>
<style scoped lang="less"></style>
