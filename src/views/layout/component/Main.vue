<template>
    <div id="main-wrap">
        <el-main>
            <router-view />
        </el-main>
    </div>
</template>

<script>
export default {
    name: 'Main',
}
</script>

<style scoped lang="less">
#main-wrap {
    width:100%;
    min-height: calc(100vh - 56px);
}
</style>
