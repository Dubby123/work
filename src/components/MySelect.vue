<template>
    <div class="_MySelect_root">
        <el-select v-model="value" placeholder="请选择"  size='mini' >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
            >
            </el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    name: 'MySelect',
    data() {
        return {
            value: '',
        }
    },
    props: {
        options: {
            type: Array,
            default: () => [
                {
                    value: '选项1',
                    label: '黄金糕',
                },
                {
                    value: '选项2',
                    label: '双皮奶',
                },
                {
                    value: '选项3',
                    label: '蚵仔煎',
                },
                {
                    value: '选项4',
                    label: '龙须面',
                },
                {
                    value: '选项5',
                    label: '北京烤鸭',
                },
            ],
        },
    },
    methods: {
        name() {},
    },
}
</script>

<style lang="less" scoped>          
._MySelect_root  {
    width: 91px;
    height: 28px;
    background-color: #f7f8f9;
    border-radius: 2px 0px 0px 2px;
    border: solid 1px #e6e6e6;
    display: inline-block;
   /deep/ .el-select .el-input .el-select__caret {
       	color: #666666;
        font-size: 14px;
        transition: transform 0.3s;
        transform: rotateZ(-90deg);
        cursor: pointer;
    }
}
</style>
