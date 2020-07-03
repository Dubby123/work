const routes = [
    {
        path: '/report', //生产报表
        name: 'report',
        component: () => import('@/views/report/water.vue')
    },
    {
        path: '/report/water', //水质报表
        name: 'water',
        component: () => import('@/views/report/water.vue')
    },
    {
        path: '/report/mud', //泥处理报表
        name: 'mud',
        component: () => import('@/views/report/mud.vue')
    },
    {
        path: '/report/energy', //能源报表
        name: 'energy',
        component: () => import('@/views/report/energy.vue')
    },
]

export default routes
