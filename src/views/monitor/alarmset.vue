<template>
  <el-container class="main_body">
    <el-container class="table_box">
      <!-- 头部查询 -->
      <!-- <el-header class="table_header">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="报警时间">
            <el-date-picker
              v-model="startTime"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="事件类型">
            <el-input v-model="selectValue" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-form>
        <div>
          <el-button type="primary" @click="createAlarmHandler">查询</el-button>
          <el-button @click="dialogFormVisible = true" style="color:#0066ff">新增</el-button>
        </div>
      </el-header> -->

  <el-header class="search_form doc_file_box">
                <el-form :inline="true" size="small" label-width="80px">
                    <el-row>
                        <el-col :span="22">
                            <el-form-item label="文件名">
                                <el-input v-model="fileName" placeholder="输入关键字查找" clearable></el-input>
                            </el-form-item>
                            <el-form-item label="文件类型">
                                <el-select v-model="fileType">
                                    <el-option label="全部" value=""></el-option>
                                    <el-option v-for="item in fileTypeList" :label="item" :value="item" :key="item"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="2">
                            <el-button type="primary" @click="searchHandler">查询</el-button>
                        </el-col>
                    </el-row>
                </el-form>
            </el-header>




      <!-- 表格列表 -->
      <el-main class="table_content">
        <i-table
          :list="list"
          :options="options"
          :columns="columns"
          :operates="operates"
          :pagination="pagination"
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
      <el-form :model="form" ref="form" label-width="120px" class="table-form table-form-pass">
        <el-form-item label="报警设备类别">
          <el-input v-model="form.user" placeholder="请选择报警设备类型"></el-input>
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
import iTable from "../../components/Table";
import BusinessUtil from "@/common/businessUtils";
import Const from "@/common/const";
import { MessageBox } from "element-ui";
export default {
  name: "alarmConfig",
  components: { iTable },
  data() {
    return {
      list: [
        {
          id: 1,
          dev: "类型1事件",
          status: "一级",
          time: "2020-02-02 20:20:20",
          penson: "王蕊蕊",
          other: "快点吧"
        },
        {
          id: 2,
          dev: "类型1事件",
          status: "一级",
          time: "2020-02-02 20:20:20",
          penson: "王蕊蕊",
          other: "快点吧"
        },
        {
          id: 3,
          dev: "类型1事件",
          status: "一级",
          time: "2020-02-02 20:20:20",
          penson: "王蕊蕊",
          other: "快点吧"
        },
        {
          id: 4,
          dev: "类型1事件",
          status: "一级",
          time: "2020-02-02 20:20:20",
          penson: "王蕊蕊",
          other: "快点吧"
        }
      ], // table数据
      options: {
        stripe: true, // 是否为斑马纹 table
        loading: false, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        border: true //是否添加边框
        //  mutiSelect: true, // 是否支持列表项选中功能
      }, // table 的参数
      columns: [
        {
          prop: "id",
          label: "序号",
          align: "center",
          width: "50px"
        },
        {
          prop: "dev",
          label: "报警设备类",
          align: "center"
        },
        {
          prop: "status",
          label: "报警级别",
          align: "center"
        },
        {
          prop: "time",
          label: "创建时间",
          align: "center"
        },
        {
          prop: "penson",
          label: "创建人",
          align: "center"
        },
        {
          prop: "other",
          label: "备注",
          align: "center"
        }
      ], // 需要展示的列
      operates: {
        width: 0,
        fixed: "right",
        list: []
      }, // 列操作按钮
      pagination: {
        total: 100,
        currentPage: 1
      },
      options: {
        index: true
      },
      startTime: "",
      endTime: "",
      selectValue: "",
      dialogFormVisible: false,
      current: 1,
      size: 10,
      pageSize: [],
      total: 100,
      form: {}
    };
  },
  methods: {
    updatePass() {},
    //重置分页
    _resetCurrentPage() {
      this.$store.commit("alarmConfig/changeCurrent", 1);
    },
    //查询报警列表
    searchAlarmHandler() {
      let params = {
        current: this.current || 1,
        size: this.size || 10
      };
      this.$store.dispatch("alarmConfig/getAlarmList", params).then(res => {
        BusinessUtil.CallbackHandler(res);
      });
    },
    //新建报警
    createAlarmHandler() {
      this.$router.push({ name: "addAlarm", replace: true });
    },
    //表格内删除报警
    deleteAlarmHandler(data) {
      MessageBox.confirm("确定要删除报警:" + data.name + "吗？", "确认提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$store.dispatch("alarmConfig/deleteAlarm", data.id).then(res =>
          BusinessUtil.CallbackHandler(res).then(() => {
            if (res.status === Const.STATUS.SUCCESS) {
              this.searchAlarmHandler();
            }
          })
        );
      });
    },
    //切换表格每页显示条数
    handleSizeChange(size) {
      this._resetCurrentPage();
      this.$store.commit("alarmConfig/changeSize", size);
      this.searchAlarmHandler();
    },
    //切换分页
    handleCurrentChange(current) {
      this.$store.commit("alarmConfig/changeCurrent", current);
      this.searchAlarmHandler();
    }
  }
};
</script>
<style lang="less" scoped>
.table_header {
  display: flex;
  // align-content: center;
  justify-content: space-between;
  // .table_title {
  //   width: 100px;
  // }
  // .el-input {
  //   width: 150px;
  // }
}
</style>
