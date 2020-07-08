<!-- WaterStatistics -->
<template>
    <div class="_WaterStatistics_root">
        <div class="index-swapper">
            <div class="icon">
                <img :src="(data && data.icon) || defaultIcon" alt="icon" />
            </div>
            <div class="right-div">
                <div class="index-div">
                    <div class="name">{{ data && data.name }}</div>
                    <div class="value">{{ data && data.value }}</div>
                </div>
                <div class="rate-div">
                    <div class="unit">{{ data && data.unit }}</div>
                    <div class="rate">
                        <span class="name">同比</span>
                        <span class="num"
                            >{{ data && Math.abs(data.rate) }}%</span
                        >
                        <img
                            v-if="data && data.rate < 0"
                            src="../components/icon/down.png"
                            alt="down"
                        />
                        <img v-else src="../components/icon/up.png" alt="up" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import defaultIcon from './icon/icon.png'

export default {
    name: 'WaterStatistics',
    props: {
        data: {
            type: Object,
            default: () => ({
                icon: defaultIcon,
                name: '当日累计进水总量',
                value: 321256,
                unit: '㎡',
                rate: 8,
            }),
        },
    },
    data() {
        return {
            defaultIcon,
        }
    },
}
</script>

<style lang="less" scoped>
._WaterStatistics_root {
    position: relative;
    width: 100%;
    .index-swapper {
        position: relative;
        width: 100%;
        height: 96px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        .icon {
            width: 50px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            > img {
                max-width: 100%;
                max-height: 100%;
            }
        }
        .right-div {
            width: 80%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 15px;
            border-bottom: 1px dotted #e6e6e6;
            .index-div {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-left: 15px;
                // max-width: 155px;
                .name {
                    font-size: 14px;
                    color: #666666;
                    text-align: left;
                    white-space: nowrap;
                }

                .value {
                    font-size: 24px;
                    color: #333333;
                    text-align: left;
                    white-space: nowrap;
                }
            }
            .rate-div {
                flex: 1;
                height: 100%;
                display: flex;
                flex-direction: column;
                .unit {
                    width: 100%;
                    font-size: 12px;
                    color: #999999;
                    text-align: right;
                }
                .rate {
                    flex: 1;
                    display: flex;
                    justify-content: flex-end;
                    align-items: flex-end;
                    line-height: 1;
                    white-space: nowrap;
                    .name {
                        font-size: 12px;
                        color: #666666;
                        margin-right: 5px;
                    }
                    .num {
                        font-size: 24px;
                        color: #ff5656;
                        margin-right: 5px;
                        margin-bottom: -2px;
                    }
                }
            }
        }
    }
}
</style>
