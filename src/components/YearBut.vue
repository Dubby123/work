<template>
    <div class="_MonthBut_root">
        <div class="content">
            <el-date-picker
                size="mini"
                prefix-icon="none"
                v-model="year"
                type="year"
                clear-icon="none"
                @change="changTime"
                value-format='yyyy'
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
            
            year: moment(new Date()).format('yyyy年'),
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
