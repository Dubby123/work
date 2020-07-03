import layout from '../../views/layout/index.vue'




const routes = [
    // {
    //     path: '/monitor', //权限管理
    //     name: 'monitor',
    //     component: () => import('@/views/monitor/process.vue')
    // },
    // {
    //     path: '/monitor/process', //流程检测
    //     name: 'process',
    //     component: () => import('@/views/monitor/process.vue')
    // },
    // {
    //     path: '/monitor/warn', //生产报警
    //     name: 'warn',
    //     component: () => import('@/views/monitor/warn.vue')
    // },
    // {
    //     path: '/monitor/alarmset', //报警设置
    //     name: 'alarmset',
    //     component: () => import('@/views/monitor/alarmset.vue')
    // }, 
    {
        path: '/monitor', //权限管理
        name: '生产监控',
        icon:'el-icon-data-line',
        component: layout,
        children:[
            {
                path: '/monitor/process', //流程检测
                name: '流程检测',
                component: () => import('@/views/monitor/process.vue')
            },
            {
                path: '/monitor/warn', //生产报警
                name: '生产报警',
                component: () => import('@/views/monitor/warn.vue')
            },
            {
                path: '/monitor/alarmset', //报警设置
                name: '报警设置',
                component: () => import('@/views/monitor/alarmset.vue')
            },

        ]
    },
  
]

export default routes
