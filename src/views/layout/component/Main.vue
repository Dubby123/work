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
    width:1200px;
    height: calc(100vh - 56px);
    box-shadow: 0 0 20px gray;
    margin-left: 15px;
}
</style>
