<template>
    <div id="main-wrap">
        <div class="main-content">
          <div>生餐监控</div>
            <div class="content">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Main"
  }
</script>

<style scoped lang='less'>
#main-wrap{
  width: 1210px;
  height:calc(100vh - 56px);
  box-shadow: 0 0 20px gray;
  margin-left: 15px;
}
  
</style>
