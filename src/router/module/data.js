const routes = [
    {
        path: '/data', //数据填报
        name: '数据填报',
        component: () => import('@/views/data/waterdata.vue')
    },
    {
        path: '/data/water_data', //水质数据填报
        name: '水质数据录入',
        component: () => import('@/views/data/waterdata.vue')
    }
]

export default routes
