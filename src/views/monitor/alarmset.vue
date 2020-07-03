<template>
    <el-container class="main_body">
        <el-container>
            <el-main class="main_table">
                <el-container class="table_box">
                    <el-header class="table_header">
                        <span class="table_title">报警时间</span>
                        <el-date-picker
                            v-model="startTime"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                        >
                        </el-date-picker>
                        <span class="table_title">事件类型</span>
                        <el-input
                            v-model="selectValue"
                            placeholder="请输入内容"
                        ></el-input>

                        <div class="table_btns">
                            <el-button
                                type="primary"
                                @click="createAlarmHandler"
                            >
                                查询
                            </el-button>
                            <el-button
                                type="primary"
                                @click="dialogFormVisible = true"
                            >
                                新增
                            </el-button>
                        </div>
                    </el-header>
                    <el-main class="table_content">
                        <el-table
                            size="small"
                            stripe
                            height="100%"
                            :data="alarmList"
                        >
                            <el-table-column
                                type="index"
                                label="序号"
                                width="50px"
                            ></el-table-column>
                            <el-table-column
                                prop="name"
                                label="事件类型"
                                min-width="20%"
                                show-overflow-tooltip
                            ></el-table-column>
                            <el-table-column
                                prop="storageVolMax"
                                label="设备名称"
                                min-width="20%"
                                show-overflow-tooltip
                            >
                                <template slot-scope="scope">
                                    {{
                                        scope.row.storageVolMin +
                                            '% - ' +
                                            scope.row.storageVolMax +
                                            '%'
                                    }}
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="rateUnit"
                                label="设备编码"
                                min-width="18%"
                                show-overflow-tooltip
                            ></el-table-column>
                            <el-table-column
                                prop="alarmPersons"
                                label="报警时间"
                                min-width="30%"
                                show-overflow-tooltip
                            ></el-table-column>
                            <el-table-column
                                prop="rateUnit"
                                label="报警状态"
                                min-width="18%"
                                show-overflow-tooltip
                            ></el-table-column>
                            <el-table-column
                                prop="rateUnit"
                                label="报警描述"
                                min-width="18%"
                                show-overflow-tooltip
                            ></el-table-column>
                        </el-table>
                    </el-main>
                    <footer class="table_footer">
                        <el-pagination
                            background
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="current"
                            :page-sizes="pageSize"
                            :page-size="size"
                            layout="total, sizes, prev, pager, next, jumper, slot"
                            :total="total"
                            prev-text="上一页"
                            next-text="下一页"
                        >
                        </el-pagination>
                    </footer>
                </el-container>
            </el-main>
        </el-container>
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
                label-width="120px"
                class="table-form table-form-pass"
            >
                <el-form-item label="报警设备类别">
                    <el-input
                        v-model="form.user"
                        placeholder="请选择报警设备类型"
                    ></el-input>
                </el-form-item>
                <el-form-item label="报警级别">
                    <el-select
                        v-model="form.region"
                        placeholder="活动区域"
                    >
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
import BusinessUtil from '@/common/businessUtils'
import Const from '@/common/const'
import { MessageBox } from 'element-ui'
export default {
    name: 'alarmConfig',
    components: {},
    data() {
        return {
            startTime: '',
            endTime: '',
            alarmList: '',
            selectValue: '',
            alarmList: [],
            dialogFormVisible: false,
            current: 1,
            size: 10,
            total: 100,
            form:{},
            // alarmConfig: {
            //     current: 1,
            //     size: 10,
            //     total: 100,
            //     pages: '',
            // },
            pageSize: Const.PAGESIZE_CONFIG.normal,
        }
    },
    computed: {
        // ...mapState('alarmConfig', ['current', 'size', 'total', 'pages']),
        // ...mapGetters('alarmConfig', {
        //     alarmList: 'getAlarmList',
        // }),
    },
    mounted() {
        // this.searchAlarmHandler()
    },
    watch: {},
    methods: {
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
        //新建报警
        createAlarmHandler() {
            this.$router.push({ name: 'addAlarm', replace: true })
        },
        //表格内删除报警
        deleteAlarmHandler(data) {
            MessageBox.confirm(
                '确定要删除报警:' + data.name + '吗？',
                '确认提示',
                {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                }
            ).then(() => {
                this.$store
                    .dispatch('alarmConfig/deleteAlarm', data.id)
                    .then((res) =>
                        BusinessUtil.CallbackHandler(res).then(() => {
                            if (res.status === Const.STATUS.SUCCESS) {
                                this.searchAlarmHandler()
                            }
                        })
                    )
            })
        },
        //切换表格每页显示条数
        handleSizeChange(size) {
            this._resetCurrentPage()
            this.$store.commit('alarmConfig/changeSize', size)
            this.searchAlarmHandler()
        },
        //切换分页
        handleCurrentChange(current) {
            this.$store.commit('alarmConfig/changeCurrent', current)
            this.searchAlarmHandler()
        },
    },
}
</script>
<style lang="less" scoped>
.table_header {
    display: flex;
    align-content: center;
    .table_title {
        width: 100px;
    }
    .el-input {
        width: 150px;
    }
}
</style>
