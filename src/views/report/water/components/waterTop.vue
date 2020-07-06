<template>
    <div class="top">
        <div class="item">
            <sub-title :cfg="cfg"></sub-title>
            <sub-title :cfg="cfg1"></sub-title>
        </div>
        <div class="item">
            <sub-title :cfg="cfg2"></sub-title>
            <sub-title :cfg="cfg3"></sub-title>
        </div>
        <div class="item">
            <sub-title :cfg="cfg4"></sub-title>
            <sub-title :cfg="cfg5"></sub-title>
            <sub-title :cfg="cfg6"></sub-title>
        </div>
    </div>
</template>
<script>
import SubTitle from '../../components/subTitle'
export default {
    name: 'subTitle',
    components:{SubTitle},
    data() {
        return {
                cfg: {
                icon: 'water-down',
                title: '当日累计进水总量',
                percent: 8,
                num: '321,256',
            },
            cfg1: {
                icon: 'water-up',
                title: '当日累计排水总量',
                percent: 8,
                num: '256,256',
            },
            cfg2: {
                icon: 'water-up',
                title: '生活污水合计进水量',
                percent: 8,
                num: '321,256',
                other: [
                    {
                        name: '市排1400进水量',
                        num: '33,039',
                    },
                    {
                        name: '新齐贤泵站',
                        num: '30,001',
                    },
                    {
                        name: '安彬1600',
                        num: '33,039',
                    },
                ],
            },
            cfg3: {
                icon: 'water-up',
                title: '当日累计排水总量',
                percent: 8,
                num: '321,256',
            },
            cfg4: {
                icon: 'water-up',
                title: '当日累计排水总量',
                percent: 8,
                num: '321,256',
                other: [
                    {
                        name: '20T进水量',
                        num: '33,039',
                    },
                    {
                        name: '40T进水量',
                        num: '30,001',
                    },
                ],
            },
            cfg5: {
                icon: 'water-up',
                title: '当月工业污水合计处理水量',
                percent: 8,
                num: '321,256',
                other: [
                    {
                        name: '20T处理水量',
                        num: '33,039',
                    },
                    {
                        name: '40T进水量',
                        num: '30,001',
                    },
                ],
            },
            cfg6: {
                icon: 'water-up',
                title: '当月工业污水排水总量',
                percent: 8,
                num: '321,256',
            },
        }
    },
    mounted() {
        console.log('cfg', this.cfg)
    },
    computed: {},
}
</script>
<style scoped lang="less">
.top {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.item {
    width: 393px;
    height: 400px;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
    border-radius: 4px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
