<template>
    <div class="_MonthBut_root">
        <div class="content">
            <el-date-picker
                size="mini"
                prefix-icon="none"
                v-model="month"
                type="month"
                clear-icon="none"
                @change="changTime"
                value-format='yyyy-MM'
            >
            </el-date-picker>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name: 'MonthBut',
    data() {
        return {
            month: moment(new Date()).format('yyyy-MM'),
        }
    },
    methods: {
        changTime() {

            this.$emit('handleTime',this.month)
        }
    },
}
</script>

<style lang="less" scoped>
._MonthBut_root {
    width: 81px;
    height: 28px;
    display: inline-block;
    margin-left: 10px;
    .content /deep/ .el-input {
         width: 100%;
        .el-input__inner {
            width: 100%;
            padding-left: 10px;
            padding-right: 10px;
            font-size: 12px;
            color: #4d4d4d;
        }
    }
}
</style>
