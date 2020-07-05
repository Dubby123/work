<template>
    <div id="nav-wrap">
        <h1 class="logo">绍兴智慧水处理平台</h1>
        <el-menu
            class="el-menu-vertical-demo"
            text-color="#fff"
            background-color="transparent"
            active-text-color="#fff"
            :router="true"
        >
            <template v-for="(item, index) in routerList">
                <el-submenu
                    :index="'' + index"
                    v-if="!item.hidden"
                    :key="item.id"
                >
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.name }}</span>
                    </template>
                    <!--                    子菜单-->
                    <template v-for="subItem in item.children">
                        <el-menu-item
                            :index="subItem.path"
                            v-if="!subItem.hidden"
                            :key="subItem.id"
                        >
                            {{ subItem.name }}</el-menu-item
                        >
                    </template>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    data() {
        return {
            // isCollapse: false
        }
    },
    computed: {
        routerList() {
            return this.$router.options.routes
        },
        isCollapse() {
            return this.$store.state.app.isCollapse
        },
    },
}
</script>

<style scoped lang="less">
#nav-wrap {
    // min-width: 200px;
    min-width: 208px;
    height: 100vh;
    background-color: #0B2A92;
    float: left;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 8000;
    .logo{
        font-size: 16px;
        color: #ffffff;
    }
    .el-menu{
        border: none;
    }
}
// @import "../../../styles/config.scss";
</style>
