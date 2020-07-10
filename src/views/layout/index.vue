<template>
    <div id="layout-warp">
        <layoutMenu class="left" />
        <div class="right">
            <layoutHeader />
            <!-- <div>
                <span>nihao</span>
                <Breadcrumb />
            </div> -->

            <layoutMain />
        </div>
    </div>
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
#layout-warp {
    display: flex;

    .right {
        flex: 1;
    }
}
</style>
