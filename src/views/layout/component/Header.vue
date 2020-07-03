<template>
    <div id="header-wrap">
        <!-- <svg-icon iconClass="caidan" className="menu" @click="toggleMenu()"/> -->
            <span>管理员</span>
            <!-- <svg-icon iconClass="icon-test" className="exit"/> -->
    </div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        toggleMenu() {
            this.$store.commit('app/SET_COLLAPSE')
        },
    },
}
</script>

<style scoped lang="less">
#header-wrap {
    width: 100%;
    height: 56px;
    background-color: red;
}
</style>
