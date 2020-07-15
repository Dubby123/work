<template>
    <div>
        <div class="title_panel">
            <span>
                <span class="left">{{ title }}</span>
                <slot name="category"></slot>
            </span>
            <span>
                <span class="right">单位 ：{{ unit }}</span>
                <slot name="Time"></slot>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        unit: {
            type: String,
            default: '吨',
        },
    },

    data() {
        return {}
    },
}
</script>

<style lang="less" scoped>
.title_panel {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    .left {
        font-size: 14px;
        color: #666666;
    }
    .right {
        font-size: 12px;
        color: #999999;
        margin-right: 15px;
    }
}
</style>
