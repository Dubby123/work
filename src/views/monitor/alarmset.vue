<template>
    <el-container class="main_body">
        <el-container class="table_box">
            <!-- 头部查询 -->
            <el-header class="search_form doc_file_box">
                <el-form :inline="true" size="small" label-width="83px">
                    <el-form-item label="报警时间">
                        <el-date-picker
                            v-model="selectTime"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="选择日期"
                            end-placeholder="选择日期"
                            value-format="yyyy-MM-dd"
                        ></el-date-picker>
                    </el-form-item>
                    <el-form-item label="文件类型">
                        <el-input
                            v-model="selectValue"
                            placeholder="输入关键字查找"
                            clearable
                        ></el-input>
                    </el-form-item>
                    <el-form-item style="margin-right: auto;">
                        <el-button
                            type="primary"
                            size="small"
                            @click="searchHandler"
                            >查询</el-button
                        >
                        <el-button
                            size="small"
                            style="color:#0066ff "
                            @click="dialogFormVisible = true"
                            >新增</el-button
                        >
                    </el-form-item>
                </el-form>
            </el-header>
            <!-- 表格列表 -->
            <el-main class="table_content">
                <i-table
                    :list="list"
                    :columns="columns"
                    :pagination="pagination"
                    @handleSizeChange="handleSizeChange"
                    @handleCurrentChange="handleCurrentChange"
                ></i-table>
            </el-main>
        </el-container>
        <!-- 新增类别 -->
        <el-dialog
            title="新增报警设置"
            :visible.sync="dialogFormVisible"
            append-to-body
            id="mask-box"
            width="600px"
        >
            <el-form
                :model="form"
                ref="form"
                label-width="85px"
                class="table-form table-form-pass"
            >
                <el-form-item label="报警设备类">
                     <el-select v-model="form.region" placeholder="请选择报警设备类型">
                        <el-option label="级别一" value="shanghai"></el-option>
                        <el-option label="级别二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="报警级别">
                    <el-select v-model="form.region" placeholder="活动区域">
                        <el-option label="级别一" value="shanghai"></el-option>
                        <el-option label="级别二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="updatePass">确 定</el-button>
            </div>
        </el-dialog>
    </el-container>
</template>
<script>
// import { mapState, mapGetters } from 'vuex'
import iTable from '../../components/Table'
import BusinessUtil from '@/common/businessUtils'
import Const from '@/common/const'
import { MessageBox } from 'element-ui'
export default {
    name: 'alarmConfig',
    components: { iTable },
    data() {
        return {
            // table数据
            list: [
                {
                    id: 1,
                    dev: '类型1事件',
                    status: '一级',
                    time: '2020-02-02 20:20:20',
                    penson: '王蕊蕊',
                    other: '快点吧',
                },
                {
                    id: 2,
                    dev: '类型1事件',
                    status: '一级',
                    time: '2020-02-02 20:20:20',
                    penson: '王蕊蕊',
                    other: '快点吧',
                },
                {
                    id: 3,
                    dev: '类型1事件',
                    status: '一级',
                    time: '2020-02-02 20:20:20',
                    penson: '王蕊蕊',
                    other: '快点吧',
                },
                {
                    id: 4,
                    dev: '类型1事件',
                    status: '一级',
                    time: '2020-02-02 20:20:20',
                    penson: '王蕊蕊',
                    other: '快点吧',
                },
            ], // table数据表头
            columns: [
                {
                    prop: 'id',
                    label: '序号',
                    align: 'center',
                    width: '50px',
                },
                {
                    prop: 'dev',
                    label: '报警设备类',
                    align: 'center',
                },
                {
                    prop: 'status',
                    label: '报警级别',
                    align: 'center',
                },
                {
                    prop: 'time',
                    label: '创建时间',
                    align: 'center',
                },
                {
                    prop: 'penson',
                    label: '创建人',
                    align: 'center',
                },
                {
                    prop: 'other',
                    label: '备注',
                    align: 'center',
                },
            ],
            // 页面配置
            pagination: {
                total: 100,
                currentPage: 1,
                pageNo: 1,
            },
            selectTime: '', //查询时间
            selectValue: '', //查询值
            dialogFormVisible: false,
            form: {},
        }
    },
    methods: {
        updatePass() {},
        //重置分页
        _resetCurrentPage() {
            this.$store.commit('alarmConfig/changeCurrent', 1)
        },
        //查询报警列表
        searchAlarmHandler() {
            let params = {
                current: this.current || 1,
                size: this.size || 10,
            }
            this.$store
                .dispatch('alarmConfig/getAlarmList', params)
                .then((res) => {
                    BusinessUtil.CallbackHandler(res)
                })
        },
        //切换表格每页显示条数
        handleSizeChange(size) {
            console.log('size', size)
            // this._resetCurrentPage();
            // this.$store.commit("alarmConfig/changeSize", size);
            // this.searchAlarmHandler();
        },
        //切换分页
        handleCurrentChange(current) {
            console.log('current', current)
            // this.$store.commit("alarmConfig/changeCurrent", current);
            // this.searchAlarmHandler();
        },
        searchHandler() {
            console.log('value1', this.selectTime)
        },
    },
}
</script>
<style lang="less" scoped>
.search_form /deep/ .el-form-item {
    text-align: left;
    border-radius: 2px;
    .el-form-item__content {
        border: solid 1px #e6e6e6;
    }
    .el-range-separator {
        width: 10%;
        padding: 0 10px;
        background-color: #f7f8f9;
    }
    .el-form-item__label {
        line-height: 33px;
        background-color: #f7f8f9;
        border-radius: 2px 0px 0px 2px;
        border: solid 1px #e6e6e6;
        font-size: 13px;
        color: #666666;
        border-left: none;
    }
    .el-input__inner {
        border: none;
        border-radius: 0;
    }
}
.table-form /deep/ .el-select .el-input .el-select__caret {
    color: #666666;
    font-size: 14px;
    transition: transform 0.3s;
    transform: rotateZ(-90deg);
    cursor: pointer;
}
</style>
