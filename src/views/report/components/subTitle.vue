<template>
    <div class="box">
        <img src="@/assets/imgs/water-up.png" class="box-left" alt=""/>
        <div class="box-right">
            <div class="box-top">
                <div class="m-item">
                    <div class="name">{{ cfg.title }}</div>
                    <div class="num">{{ cfg.num }}</div>
                </div>
                <div style="font-size:12px">
                    同比<span class="percent">{{ cfg.percent }}%</span>
                </div>
            </div>
            <div class="item" v-if="cfg.other">
                <div class="m-item" v-for="item in cfg.other" :key="item.name">
                    <div class="name">{{ item.name }}</div>
                    <div class="num">{{ item.num }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'subTitle',
    data() {
        return {}
    },
    mounted() {
        console.log('cfg', this.cfg)
    },
    props: {
        cfg: {
            type: Object,
            default: ()=>{},
        },
    },
    computed: {},
}
</script>
<style scoped lang="less">
.box {
    &:after {
        content: '';
        display: block;
        clear: both;
    }
    .box-left {
        width: 43px;
        height: 55px;
        float: left;
    }
    .box-right {
        width: 284px;
        float: right;
        .m-item {
            min-width: 45%;
            color: #666666;
            text-align: left;
            .name {
                font-size: 14px;
                margin-bottom: 13px;
            }
            .num {
                font-size: 24px;
            }
        }
        .box-top {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            text-align: left;
            .percent {
                font-size: 24px;
                &::after {
                    display: inline-block;
                    content: '';
                    width: 52px;
                    height: 33px;
                    background: url('~@/assets/imgs/up.png') no-repeat;
                }
            }
        }
        .item {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .m-item {
                margin-top: 26px;
            }
        }
    }
}
</style>
