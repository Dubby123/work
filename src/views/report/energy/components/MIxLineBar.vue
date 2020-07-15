<template>
    <div>

    </div>
</template>

<script>
    export default {
        option = {
    tooltip: {
        trigger: 'axis',
        backgroundColor:'#FFF',
      
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        textStyle:{
            color:'#666666',
             fontSize:'12px',
             lineHeight: 56,
        },
           formatter: function(params) {
                        var res = ''
                        for (var i = 0, l = params.length; i < l; i++) {
                            res += `<div>
                <div >
                    <span style="display:inline-block;margin-right:10px;width:10px;height:10px;background-color:${params[i].color}"></span><span>${params[i].seriesName}</span></div>
                   
                <span style="margin-left:20px">${params[i].value}</span>
            </div>`
                        }
                        return res
                    },
    },
    color:['#3787ff','#ffc191'],
 
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
                splitLine:{
                show:false
            }
          
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            splitLine:{
                show:false
            }
           
        }
    ],
    series: [
  
        {
            name: '降水量',
            type: 'bar',
            barWidth:10,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name: '平均温度',
            type: 'line',
            smooth:true,
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]

    }
</script>

<style lang="scss" scoped>

</style>