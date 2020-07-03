<template>
    <div id="nav-wrap" >
        <h4 class="logo">绍兴智慧水处理平台</h4>
        <el-menu
                 class="el-menu-vertical-demo"    
                 text-color="#fff"
                 background-color="transparent"
                 active-text-color="#fff"
                 width='200px'
                 :router="true"
        >
            <template v-for="(item ,index) in routerList" >
                <el-submenu :index="''+index"  v-if="!item.hidden"  :key="item.id">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">{{item.name}}</span>
                    </template>
<!--                    子菜单-->
                    <template v-for="subItem in item.children" >
                        <el-menu-item   :index = "subItem.path"  v-if="!subItem.hidden" :key="subItem.id"> {{ subItem.name }}</el-menu-item>
                    </template>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
  export default {
    name: "Menu",
    data() {
      return {
        // isCollapse: false
      };
    },
    computed:{
      routerList(){
        return this.$router.options.routes
      },
      isCollapse(){
        return this.$store.state.app.isCollapse
      }
    },
  }
</script>

<style scoped lang='less'>
#nav-wrap{
  width: 200px;
  height: 100vh;
  background-color: #0B2A92;
  font-size: 14px;
  color: #ffffff;
  .logo{
    height: 56px;
    line-height: 56px;
    font-size: 16px;
    background-color: #071059;
    border-bottom: 1px solid #707070;
  }
}
  
</style>
