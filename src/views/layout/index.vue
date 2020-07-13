<template>
    <el-container id="layout-warp">
        <el-aside width="208px"> <layoutMenu class="left"/></el-aside>
        <el-container>
            <el-header  > <layoutHeader /></el-header>
            <div><Breadcrumb/></div>
            <el-main> <layoutMain /></el-main>
        </el-container>
    </el-container>
</template>

<script>
import layoutHeader from './component/Header'
import layoutMain from './component/Main'
import layoutMenu from './component/Menu.vue'
import Breadcrumb from './component/Breadcrumb.vue'
export default {
    name: 'index',
    components: {
        layoutHeader,
        layoutMain,
        layoutMenu,
        Breadcrumb,
    },
}
</script>

<style scoped lang="less">
.el-header{
    padding: 0;
}

</style>
