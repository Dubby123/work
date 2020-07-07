import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store'
import ElementUI from 'element-ui';
import './components/globalRegister.js'
import './style/reset.css'
// import './icons/index'
import 'element-ui/lib/theme-chalk/index.css';
// import echarts from 'echarts'
// import  global from './utils/global' //全局注册方法

Vue.use(global)
Vue.use(ElementUI);
// Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
