<template>
  <div class="table-page">
    <i-table :list="list" :options="options" :columns="columns" :operates="operates"></i-table>
  </div>
</template>
<script>
import iTable from "../../components/Table";
export default {
  components: { iTable },
  data() {
    return {
      list: [
        {
          id: "24",
          CODcr: 123.56,
          pH: 123.56,
          SS: 156.56,
          TN: 132.56,
          TP: 154.56,
          Atime: "2020-02-02 20:20:20",
          penson: "张三",
          time: "2020-02-02 20:20:20"
        },
        {
          id: "24",
          CODcr: 123.56,
          pH: 123.56,
          SS: 156.56,
          TN: 132.56,
          TP: 154.56,
          Atime: "2020-02-02 20:20:20",
          penson: "张三",
          time: "2020-02-02 20:20:20"
        },

        {
          id: "24",
          CODcr: 123.56,
          pH: 123.56,
          SS: 156.56,
          TN: 132.56,
          TP: 154.56,
          Atime: "2020-02-02 20:20:20",
          penson: "张三",
          time: "2020-02-02 20:20:20"
        }
      ], // table数据
      options: {
        stripe: true, // 是否为斑马纹 table
        loading: false, // 是否添加表格loading加载动画
        highlightCurrentRow: true ,// 是否支持当前行高亮显示
        border:true //是否添加边框
        //  mutiSelect: true, // 是否支持列表项选中功能
      }, // table 的参数
      columns: [
        {
          prop: "id",
          label: "序号",
          align: "center"
        },
        {
          prop: "CODcr",
          label: "CODcr",
          align: "center"
        },
        {
          prop: "pH",
          label: "pH",
          align: "center"
        },
        {
          prop: "SS",
          label: "SS",
          align: "center"
        },
        {
          prop: "TN",
          label: "TN",
          align: "center"
        },

        {
          prop: "TP",
          label: "TP",
          align: "center"
        },
        {
          prop: "Atime",
          label: "检测时间",
          width:"180px",
          align: "center"
        },
        {
          prop: "penson",
          label: "填报人",
            width:"180px",
          align: "center"
        },

        {
          prop: "time",
          label: "填报时间",
            width:"180px",
          align: "center"
        }
      ], // 需要展示的列
      operates: {
        width: 0,
        fixed: "right",
        list: []
      } // 列操作按钮
    };
  },
  methods: {
    
  }
};
</script>
<style scoped>


</style>
 