<template>
    <div class="navigator-container" ref="navigator">
        <div class="navigator_header">
            绍兴智慧水处理平台
        </div>
        <el-menu
            ref="menu"
            class="el-menu-vertical"
            :default-active="this.$route.path"
            background-color="transparent"
            active-text-color="#fff"
            text-color="rgba(255,255,255,0.85)"
            router
        >
            <template v-for="(item, index) in navList">
                <el-menu-item
                    v-if="!item.childList || item.childList.length <= 0"
                    :index="item.context"
                    :key="index"
                >
                    <!-- <i :class="'icon icon-' + item.icon"></i> -->
                       <i class="el-icon-document"></i>
                    <span slot="title">{{ item.name }}</span>
                </el-menu-item>
                <el-submenu :index="item.context" :key="index" v-else>
                    <template slot="title">
                        <!-- <i :class="'icon icon-' + item.icon"></i
                        > -->
                          <i class="el-icon-document"></i>
                        <span slot="title">{{ item.name }}</span>
                    </template>
                    <template v-for="(item, index) in item.childList">
                        <el-menu-item
                            v-if="!item.childList || item.childList.length <= 0"
                            :index="item.context"
                            :key="index"
                            v-html="item.name"
                        >
                        </el-menu-item>
                        <el-submenu :index="item.context" :key="index" v-else>
                            <template slot="title">{{ item.name }}</template>
                            <template v-for="(item, index) in item.childList">
                                <el-menu-item
                                    :index="item.context"
                                    :key="index"
                                    v-html="item.name"
                                ></el-menu-item>
                            </template>
                        </el-submenu>
                    </template>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
// import { mapState } from 'vuex'
import CONST from '@/common/const'
export default {
    name: 'Navigator',
    // props: {
    //     navList: Array
    // },
    created() {
        console.log('NAV_LIST_SOFTWARE', CONST.NAV_LIST_SOFTWARE)
    },
    mounted() {
        // if (this.isCollapse) {
        //     this.__toggleClass(document.getElementById('body'), 'collapseMenu')
        // }
    },
    data() {
        return {
            navList: CONST.NAV_LIST_SOFTWARE,
        }
    },

    methods: {},
}
</script>
<style lang="less" scoped>
.navigator-container {
    min-width: 208px;
    min-height: 100vh;
    background-image: linear-gradient(#0b2a92, #070c4f);
    float: left;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    &::after {
        display: inline-block;
        position: absolute;
        bottom: 20px;
        left: 0;
        content: '';
        width: 200px;
        height: 297px;
        background: url('../../../assets/imgs/cebian.png') no-repeat;
    }
}
.navigator_header {
    width: 100%;
    font-size: 16px;
    color: #ffffff;
    line-height: 56px;
    background-color: #071059;
    &::before {
        display: inline-block;
        content: '';
        width: 23px;
        height: 23px;
        background: url('../../../assets/imgs/log.png') no-repeat;
        background-size: 100%;
        margin-right: 5px;
    }
}
.el-menu-vertical {
    min-width: 208px;
    border-right: none;
    .el-menu-item {
        height: 56px;
        line-height: 56px;
        font-size: 12px;
        border-left: 5px solid transparent;
        &.is-active {
            font-weight: bold;
            background-color: #36363d !important;
            border-left: 5px solid #0066ff;
            opacity: 0.8;
        }
    }
}
</style>
