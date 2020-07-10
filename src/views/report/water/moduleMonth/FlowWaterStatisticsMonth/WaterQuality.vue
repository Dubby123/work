<!-- 进水排水水质 -->
<template>
    <rect-box class="_WaterQuality_root">
        <div class="title-swapper">
            <span class="name">当月累计进水排水统计</span> <span>2020-03</span>
        </div>
        <my-legend :myLegend='myLegend'/>
        <div class="chart-swapper">
          <!-- <water-comparison-chart/>  -->
          
        </div>
    </rect-box>
</template>

<script>
// import WaterComparisonChart from '../../components/WaterComparisonChart'

export default {
    name: 'WaterQuality',
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
                    color: ['#f27e15','#f27e15'],
                    opacity: 1,
                },
                {
                    name: '工业进水',
                    color: ['#ffd5ab','#ffd5ab'],
                    opacity: 1,
                },
                {
                    name: '累计排水',
                    color: ['#0336ff', '#01b4ff'],
                    opacity: 1,
                },
                {
                    name: '生活排水',
                    color: ['#269ffb','#269ffb'],
                    opacity: 0.8,
                },
                {
                    name: '工业排水',
                    color: ['#9ed5ff','#9ed5ff',],
                    opacity: 0.8,
                },
            ],
            myData: [
                // value1 生活进水 value2 工业进水 value3 排水
                { name: 'COD', value1: 5.1, value2: 5.1, value3: 11.1 },
                { name: 'SS', value1: 4.9, value2: 4.9, value3: 10.9 },
                { name: 'TN', value1: 5.2, value2: 5.2, value3: 12.2 },
                { name: 'pH', value1: 4.3, value2: 4.3, value3: 9.3 },
                { name: 'NH3-N', value1: 5.6, value2: 5.6, value3: 14.6 },
                { name: 'TP', value1: 4.5, value2: 4.5, value3: 9.5 },
            ],
        }
    },
    computed: {
        list1() {
            if (!this.myData || !Array.isArray(this.myData)) return []
            if (this.myData.length >= 3) {
                return this.myData.slice(0, 3)
            } else {
                return this.myData
            }
        },
        list2() {
            if (
                !this.myData ||
                !Array.isArray(this.myData) ||
                this.myData.length <= 3
            )
                return []
            if (this.myData.length >= 6) {
                return this.myData.slice(3, 6)
            } else {
                return this.myData.slice(3, this.myData.length)
            }
        },
    },
    components: {
        // WaterComparisonChart,
    },
}
</script>

<style lang="less" scoped>
._WaterQuality_root {
    position: relative;
    width: 100%;
    height: 278px;
    margin-top: 25px;
    padding-top: 15px;
    .title-swapper {
        width: 100%;
        height: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        .name {
            font-size: 14px;
            color: #666666;
        }
      
    }

    .chart-swapper {
        position: relative;
        width: 100%;
        height: 215px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        .chart-item {
            width: 50%;
            height: 100%;
        }
        .bar-line {
            width: 1px;
            height: 95%;
            background-color: #e6e6e6;
        }
    }
}
</style>
