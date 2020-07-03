import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../views/layout/index.vue'
// import  { getToKen } from "../utils/app";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login',
    hidden:true
  },
  {
    path: '/login',
    name:'登录',
    hidden:true,
    component: () => import( '../views/Login/login.vue')
  },
  {
    path: '/proMonitor',
    redirect:'alarmSet',
    name: '生产监控',
    component: layout,
    children:[
      {
      path: '/processMonitor',
      name: '流程监测',
     
      component: () => import( '../views/ProMonitor/ProcessMonitor/index'),
    },
    {
      path: '/productionWarn',
      name: '生产报警',
      component: () => import( '../views/ProMonitor/ProductionWarn/index'),
    },
    {
      path: '/alarmSet',
      name: '报警设置',
      component: () => import( '../views/ProMonitor/AlarmSet/index'),
    }],
  },
  {
    path: '/waterReport',
    name: '生产报表',
    component: layout,
    children:[
      {
      path: '/waterReport',
      name: '水质报表',
      component: () => import( '../views/ProductionReport/waterReport/index'),
    },
    // {
    //   path: '/mudHandleReport',
    //   name: '泥处理报表',
    //   component: () => import( '../views/ProductionReport/mudHandleReport/index'),
    // },
    // {
    //   path: '/index',
    //   name: '能耗报表',
    //   component: () => import( '../views/ProductionReport/mudHandleReport/index'),
    // }
  ],
  },
  // {
  //   path: '/console',
  //   redirect:'index',
  //   name: '数据填报',
  //   component: layout,
  //   children:[
  //     {
  //     path: '/index',
  //     name: '水质数据录入',
  //     component: () => import( '../views/Console/Index'),
  //   }],
  // }
]
//  const whiteRouter = ['/login','/index']

const router = new VueRouter({
  routes
})
// router.beforeEach((to ,from,next)=>{
//   if( whiteRouter.indexOf(to.path)!==-1){
//     next()
//   }else {
//     if(!getToKen() ){
//       next('/login')
//     }else {
//       next()
//     }
//   }
// })
export default router
