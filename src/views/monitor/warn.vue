<template>
 <div class="table-page">
 <i-table :list="list"
    @handleSelectionChange="handleSelectionChange"
    :options="options"
    :columns="columns"
    :operates="operates"
  >
 </i-table>
 </div>
</template>
<script>
 import iTable from '../../components/Table'
 export default {
  components: {iTable},
  data () {
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
        },   {
          id: 3,
          dev: "类型1事件",
          status: "一级",
          time: "2020-02-02 20:20:20",
          penson: "王蕊蕊",
          other: "快点吧"
        },   {
          id: 4,
          dev: "类型1事件",
          status: "一级",
          time: "2020-02-02 20:20:20",
          penson: "王蕊蕊",
          other: "快点吧"
        }
      ], 
    options: {
     stripe: true, // 是否为斑马纹 table
     loading: false, // 是否添加表格loading加载动画
     highlightCurrentRow: true, // 是否支持当前行高亮显示
    //  mutiSelect: true, // 是否支持列表项选中功能
    }, // table 的参数
    columns: [
        {
          prop: "id",
          label: "序号",
          align: "center",
          width:'50px'
        },
        {
          prop: "dev",
          label: "事件类型",
          align: "center"
        },
        {
          prop: "status",
          label: "设备名称",
          align: "center"
        },
          {
          prop: "status",
          label: "设备编码",
          align: "center"
        },
        {
          prop: "time",
          label: "报警时间",
          align: "center"
        },
        {
          prop: "penson",
          label: "报警状态",
          align: "center"
        },
        {
          prop: "other",
          label: "报警描述",
          align: "center"
        }], // 需要展示的列
    operates: {
     width: 200,
     fixed: 'right',
     list: [],
    } // 列操作按钮
   }
  },
  methods: {
   // 选中行
   handleSelectionChange (val) {
    console.log('val:', val)
   },
   // 编辑
   handleEdit (index, row) {
    console.log(' index:', index)
    console.log(' row:', row)
   },
   // 删除
   handleDel (index, row) {
    console.log(' index:', index)
    console.log(' row:', row)
   }
  }
 }
</script>