<template>
    <div class="legend-swapper ">
        <div
            class="legend-item"
            v-for="(item, i) in myLegend"
            :key="`legend-${i}`"
        >
            <div
                class="rect"
                :style="
                    `background-image: linear-gradient(270deg, ${item.color[0]}, ${item.color[1]});opacity: ${item.opacity};`
                "
            ></div>
            <div class="name">{{ item.name }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        myLegend:{
            type:Array,
            default:()=>[]
        }
    }
}
</script>

<style lang="less" scoped>
      .legend-swapper {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-right: 20px;
            margin-top: 10px;
            .legend-item {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                margin-left: 20px;
                .rect {
                    width: 12px;
                    height: 12px;
                    background-image: linear-gradient(270deg, #ffb300, #ff2300);
                    opacity: 1;
                }
                .name {
                    margin-left: 10px;
                    font-size: 12px;
                    color: #666666;
                    line-height: 1;
                }
            }
          
        }
</style>
