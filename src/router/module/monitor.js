const routes = [
    {
        path: '/monitor', //权限管理
        name: 'monitor',
        component: () => import('@/views/monitor/process.vue')
    },
    {
        path: '/monitor/process', //流程检测
        name: 'process',
        component: () => import('@/views/monitor/process.vue')
    },
    {
        path: '/monitor/warn', //生产报警
        name: 'warn',
        component: () => import('@/views/monitor/warn.vue')
    },
    {
        path: '/monitor/alarmset', //报警设置
        name: 'alarmset',
        component: () => import('@/views/monitor/alarmset.vue')
    }, 
]

export default routes
