<template>
    <div>
        <ul>
            <li
                v-for="item in typeList"
                :key="item.name"
                :class="{ active: type == item.type}"
                @click="trigger(item)"
            >
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'TimeButton',
    data() {
        return {
            typeList: [
                {
                    name:'当日',
                    type:'date'
                }, 
                {
                    name:'按月统计',
                    type:'month'
                }, 
                {
                    name:'按年统计',
                    type:'year'
                }],
            type: 'date',
        }
    },
    methods: {
        trigger(item) {
            this.type = item.type
            this.$emit('triggerTime', this.type)
        },
    },
}
</script>
<style lang="less" scoped>
ul {
    width: 240px;
    height: 32px;
    background-color: #e6e6e6;
    border-radius: 4px;
    display: flex;
    align-items: center;
    font-size: 12px;
    letter-spacing: 1px;
    color: #666666;
    li {
        flex: 1;
        border-left: 1px #cccccc solid;
        &:nth-child(1) {
            border-left: none;
        }
    }
    .active {
        line-height: 32px;
        background-color: #0066ff;
        border-radius: 4px;
        color: #ffffff;
    }
}
</style>
