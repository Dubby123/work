<template>
    <div id="layout-warp">
        <layoutMenu class="left"/>
        <div class="right">
            <layoutHeader/>
            <layoutMain/>
        </div>

    </div>
</template>

<script>
  import layoutHeader from './component/Header'
  import layoutMain from './component/Main'
  import layoutMenu from './component/Menu.vue'
 
  export default {
    name: "index",
    components: {
      layoutHeader,
      layoutMain,
      layoutMenu
    }
  }
</script>

<style scoped lang='less'>
    #layout-warp{
        display: flex;

        .right{
          flex:1
        }
    }
</style>
