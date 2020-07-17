<template>
    <div>
        <header class="header">
            <div class="main">
                <div class="left">
                    <img src="../../assets/imgs/log.png" alt="" />
                    <span>绍兴智慧水处理平台</span>
                </div>
                <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="用户管理" name="first"
                        >用户管理</el-tab-pane
                    >
                    <el-tab-pane label="配置管理" name="second"
                        >配置管理</el-tab-pane
                    >
                    <el-tab-pane label="角色管理" name="third"
                        >角色管理</el-tab-pane
                    >
                    <el-tab-pane label="定时任务补偿" name="fourth"
                        >定时任务补偿</el-tab-pane
                    >
                </el-tabs> -->
                <ul>
                    <li
                        v-for="(item, index) in listData"
                        :key="item"
                        :class="{ active: index == selected }"
                        @click="selected = index"
                    >
                        {{ item }}
                    </li>
                </ul>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        更多<i
                            class="el-icon-caret-bottom el-icon--right"
                        ></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                    <span class="el-dropdown-link1">
                        你好，迷你长颈鹿<i
                            class="el-icon-caret-bottom el-icon--right"
                        ></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: 0,
            listData: [
                '首页',
                '办公OA',
                '化验室信息化',
                '安全监控',
                '生产监控',
            ],
        }
    },
}
</script>

<style lang="less" scoped>
.header {
    width: 100%;
    height: 64px;
     color: #fff;
    background-image: linear-gradient(270deg, #0b2a92 0%, #070c4f 100%);
    display: flex;
    align-items: center;
   justify-content: center;
 
    .main {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
            display: flex;
            align-items: center;
            // margin-right: 70px;
            span {
                margin-left: 10px;
                font-size: 18px;
            }
        }
        ul {
            display: flex;
            font-size: 16px;
            line-height: 64px;
            li {
                padding: 0 25px;
            }
            .active {
                background-color: #ffffff;
                color: #0066ff;
                border-bottom: 2px solid #0066ff;
            }
        }
        .el-dropdown-link {
            font-size: 16px;
            color: #ffffff;
        }
          .el-dropdown-link1 {
            font-size: 14px;
            color: #ffffff;
        }
    }
}
</style>
