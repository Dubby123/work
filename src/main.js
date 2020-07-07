import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
//UI 组件
import './style/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import api from '@/common/api'
import moment from 'moment'

Vue.config.productionTip = false
import './components/globalRegister'
var __vue = null
Vue.prototype.$moment = moment //赋值使用 就是调用一下
moment.locale('zh-cn') // 这里是进行了汉化
//初始化vue
//动态配置后台服务器地址&微服务
;(function() {
    axios.defaults.withCredentials = true
    axios.get('./baseUrl.json').then(res => {
        Vue.config.productionTip = false
        api.setHost(res.data.baseUrl)
        api.setExUrl(res.data.exUrl)
        api.setGeneratorUrl(res.data.generatorUrl)
        api.setLogoutUrl(res.data.logoutUrl)
        Vue.use(ElementUI)
        // Vue.use(uploader)
        __vue = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    })
})()

export default __vue
