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
    name: 'breadcrumb',
    data() {
        return {
            levelList: [],
        }
    },
    watch: {
        $route: function(newVal,) {
            console.log('newVal', newVal.matched)
            this.routerList = newVal.matched
        },
    },
    created() {
        this.routerList = this.$route.matched
    },
  
}
</script>
