<template>
    <div class="navbar clearfix">
        <el-breadcrumb
            class="breadcrumb-container"
            separator-class="el-icon-arrow-right"
        >
            <el-breadcrumb-item
                v-for="item in routerList"
                :key="item.path"
                :to="item.path"
                >{{ item.name }}</el-breadcrumb-item
            >
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            levelList: [],
        }
    },
    watch: {
        $route: function(newVal,) {
            this.routerList = newVal.meta.routeList
        },
    },
    created() {
        this.routerList = this.$route.matched
        console.log(' this.routerList',this.routerList)
    },
  
}
</script>
