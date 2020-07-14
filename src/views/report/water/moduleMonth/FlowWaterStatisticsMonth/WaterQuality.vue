<!-- 进水排水水质 -->
<template>
    <rect-box class="_WaterQuality_root">
        <div class="_WaterQuality_top">
            <span class="title">当月累计进水排水统计</span>
            <month-but @handleTime="selectTime" />
        </div>
        <div class="charts_root">
            <double-contrast-bar  />
        </div>
    </rect-box>
</template>
<script>
import DoubleContrastBar from '../../components/DoubleContrastBar';
export default {
    name: 'WaterQuality',
    components:{DoubleContrastBar},
    data() {
        return {
            myLegend: [
                {
                    name: '总进水',
                    color: ['#ef6e18', '#fcc204'],
                    opacity: 1,
                },
                {
                    name: '生活进水',
                    color: ['#f27e15', '#f27e15'],
                    opacity: 1,
                },
                {
                    name: '工业进水',
                    color: ['#ffd5ab', '#ffd5ab'],
                    opacity: 1,
                },
                {
                    name: '累计排水',
                    color: ['#0336ff', '#01b4ff'],
                    opacity: 1,
                },
                {
                    name: '生活排水',
                    color: ['#269ffb', '#269ffb'],
                    opacity: 0.8,
                },
                {
                    name: '工业排水',
                    color: ['#9ed5ff', '#9ed5ff'],
                    opacity: 0.8,
                },
            ],
        }
    },
    methods: {
        selectTime() {
            
        }
    },
}
</script>

<style lang="less" scoped>
._WaterQuality_root {
    position: relative;
    width: 100%;
    height: 365px;
    margin-top: 25px;
    ._WaterQuality_top{
        padding: 15px;
        display: flex;
        justify-content: space-between;
    }
    .charts_root{
        height: 80%;
    }
    // .title-swapper {
    //     width: 100%;
    //     height: 25px;
    //     display: flex;
    //     justify-content: space-between;
    //     align-items: center;
    //     padding: 0 20px;
    //     .name {
    //         font-size: 14px;
    //         color: #666666;
    //     }
    // }

    .chart-swapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        .chart-root {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
