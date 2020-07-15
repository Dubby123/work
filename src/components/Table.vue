<template>
    <div class="table">
        <el-table
            class="tableBox"
            :data="list"
            border
            stripe
            loading
            highlightCurrentRow
            ref="mutipleTable"
            :header-cell-style="{ background: '#f3f4f5', color: '#666666' }"
        >
            <template v-for="(column, index) in columns">
                <el-table-column
                    :prop="column.prop"
                    :key="column.label"
                    :label="column.label"
                    :align="column.align"
                    :width="column.width"
                >
                </el-table-column>
            </template>
        </el-table>
        <div class="pagination">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pagination.pageNo"
                :page-size="pagination.limit"
                :page-sizes="pagination.sizes"
                prev-text="上一页"
                next-text="下一页"
                :total="pagination.total"
                layout="total, sizes, prev, pager, next, jumper"
            >
            </el-pagination>
        </div>
    </div>
</template>
<!--endregion-->
<script>
export default {
    props: {
        list: {
            type: Array,
            default: () => [],
        },
        columns: {
            type: Array,
            default: () => [],
        },
        // options: {
        //     type: Object,
        //     // eslint-disable-next-line vue/require-valid-default-prop
        //     default: {
        //         stripe: false, // 是否为斑马纹 table
        //         highlightCurrentRow: false, // 是否要高亮当前行
        //     },
        // }, // table 表格的控制参数
        fetchData: Function, // 查询分页数据的函数
        pagination: Object, // 分页器的配置对象
    },
    // 数据
    data() {
        return {}
    },
    methods: {
        handleSizeChange(val) {
            this.$emit('handleSizeChange', val)
        },
        handleCurrentChange(val) {
            this.$emit('handleCurrentChange', val)
        },
    },
}
</script>
<style lang="less" scoped>
.tableBox /deep/ th {
    padding: 0 !important;
    height: 36px;
    line-height: 36px;
}
.tableBox /deep/ td {
    padding: 0 !important;
    height: 36px;
    line-height: 36px;
}
.pagation-container {
    margin: 30px 0 0 0;
    text-align: right;
}
.pagination {
    margin-top: 20px;
    text-align: right;
}

/deep/ .pagination .el-pagination__sizes {
    float: left;
}

/deep/ .pagination .el-pagination__total {
    float: left;
}
</style>
