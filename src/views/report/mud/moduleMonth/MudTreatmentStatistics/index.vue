<template>
    <div class="_MudStatistics_root">
        <sub-title name="当月进泥量" />
        <div class="content">
            <rect-box>
                <comparison-bar />
            </rect-box>
        </div>
    </div>
</template>

<script>
import ComparisonBar from '../../components/ComparisonBar'
export default {
    name: 'MudTreatmentStatistics',
    components: { ComparisonBar },
}
</script>

<style lang="less" scoped></style>
