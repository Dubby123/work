<template>
    <div>
        <sub-title name="检测过程分析" />
        <div class="content">
          <panel-one style='margin-right:20px ;'/>
       <panel-one/>
         
        </div>
    </div>
</template>

<script>
import panelOne from './panelOne'
export default {
    name:'DetectionProcessAnalysis',
    components:{
        panelOne
    },
    data() {
        return {
       
        }
    },
}
</script>

<style lang="less" scoped>
.content{
    width: 100%;
    display: flex;

    justify-content: space-between;
}


</style>
