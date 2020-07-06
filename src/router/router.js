import Vue from 'vue'
import VueRouter from 'vue-router'

//生产监控
import monitor from './module/monitor'

// 生产报表
import  report from './module/report'

//数据录入
import data from './module/data'
import layout from '../views/layout/index.vue'
//外部引入路由对象
let routes_module = [...monitor, ...report, ...data]
//通用子路由
let children_routes = [
    {
        path: '/directory',
        name: 'directory',
        component: () => import('@/views/layout/index.vue')
    }
]

//合并路由
routes_module.forEach(e => (children_routes = children_routes.concat(e)))


console.log('routes_module',routes_module)
let base_routes = [
    // {
    //     path: '/',
    //     redirect: 'monitor'
    // },
    {
        path: '/login',
        name:'登录',
        hidden:true,
        component: () => import('@/views/login/login.vue')
    },
    {
        path: '/register',
        name:'登录',
        hidden:true,
        component: () => import('@/views/register/register.vue')
    },
    // {
    //     path: '/',
    //     redirect:'monitor',
    //     name: '生产监控',
    //     component: layout,
    //     children:routes_module
    // routes_module
    // {
    //     path: '/platform',
    //     name: 'platform',
    //     component: () => import('@/views/main.vue'),
    //     children: children_routes
    // }
]
let routes = [...base_routes ,...routes_module]
console.log('routes',routes)
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'hash',
    routes
})

export default router
