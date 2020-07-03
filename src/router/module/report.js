
import layout from '../../views/layout/index.vue'
const routes = [
    {
        path: '/report', //生产报表
        name: '生产报表',
        icon:'el-icon-pie-chart',
        component: layout,
        children:[
            {
                path: '/report/water', //水质报表
                name: '水质报表',
                component: () => import('@/views/report/water.vue')
            },
            {
                path: '/report/mud', //泥处理报表
                name: '泥处理报表',
                component: () => import('@/views/report/mud.vue')
            },
            {
                path: '/report/energy', //能源报表
                name: '能耗报表',
                component: () => import('@/views/report/energy.vue')
            },

        ]
    },
]

export default routes
