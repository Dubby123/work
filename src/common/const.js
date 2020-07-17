/**
 * 分页页数定义
 */
const PAGESIZE_CONFIG = {
    normal: [10, 20, 50, 100],
}
/**
 * 后台请求结果status约定定义
 */
const STATUS = {
    SUCCESS: true,
    ERROR: false,
}
/**
 * 导航栏权限列表
 * 根据code和后台进行匹配
 */
const NAV_LIST = [
    {
        name: '公共目录',
        context: '/directory',
        code: 'PLAT_KM_COMM_CATE',
        icon: 'file',
    },
    {
        name: '文档中心',
        context: '/file',
        code: 'PLAT_KM_FILE_CENTER',
        icon: 'log',
    },
    {
        name: '文件分享',
        context: '/file/fileShare',
    },
    {
        name: '权限管理',
        code: 'PLAT_KM_AUTH',
        context: '/auth',
        icon: 'auth',
    },
    {
        name: '存储管理',
        context: '/store/mange',
        code: 'PLAT_KM_STORAGE',
        icon: 'store',
    },
    {
        name: '存储管理',
        code: 'PLAT_KM_STORAGE_MANAGE',
        context: '/store/mange',
    },
    {
        name: '报警列表',
        code: 'PLAT_KM_STORAGE_ALARM',
        context: '/store/alarm',
    },
    {
        name: '清理策略',
        code: 'PLAT_KM_STORAGE_STRATEGY',
        context: '/store/strategy',
    },
    {
        name: '存储清理',
        code: 'PLAT_KM_STORAGE_CLEAR',
        context: '/store/clean',
    },
    {
        name: '日志列表',
        code: 'PLAT_KM_STORAGE_LOG',
        context: '/store/log',
    },
    {
        name: '水印管理',
        context: '/watermark',
        code: 'PLAT_KM_WATERMARK',
        icon: 'watermark',
    },
    {
        name: '公共目录权限',
        code: 'PLAT_KM_AUTH_CATEGORY',
        context: '/auth/directory',
    },
    {
        name: '文件接口权限',
        code: 'PLAT_KM_AUTH_INTERFACE',
        context: '/auth/file',
    },
    {
        name: '文档预览',
        context: '/directory/preview',
    },
    {
        name: '文档预览',
        context: '/directory/preview/apply',
    },
    {
        name: '文档下载',
        context: '/directory/download/apply',
    },
    {
        name: '新增存储',
        context: '/store/mange/add',
    },
    {
        name: '修改存储',
        context: '/store/mange/edit',
    },
    {
        name: '新增报警',
        context: '/store/alarm/add',
    },
    {
        name: '新增策略',
        context: '/store/strategy/add',
    },
    {
        name: '新增接口',
        context: '/auth/file/add',
    },
    {
        name: '修改接口',
        context: '/auth/file/edit',
    },
]
const NAV_LIST_SOFTWARE = [
    {
        name: '生产监控',
        code: 'PLAT_SOFTWARE_FACTORYsssw',
        context: '/auth',
        icon: 'auth',
        childList: [
            {
                name: '流程检测',
                code: 'PLAT_AUTH_DIRECTORY',
                context: '/monitor/process',
            },
            {
                name: '生产报警',
                code: 'PLAT_FILE_AUTH',
                context: '/monitor/warn',
            },
            {
                name: '报警设置',
                code: 'PLAT_FILE_AUTH',
                context: '/monitor/alarmset',
            },
        ],
    },
    {
        name: '生产报表',
        code: 'PLAT_SOFTWARE_FACTORYssa',
        context: '/report',
        icon: 'store',
        childList: [
            {
                name: '水质报表',
                code: 'PLAT_STORAGE_MANGE',
                context: '/report/water',
            },
            {
                name: '泥处理报表',
                code: 'PLAT_STORAGE_ALARM',
                context: '/report/mud',
            },
            {
                name: '能耗报表',
                code: 'PLAT_STORAGE_STRATEGY',
                context: '/report/energy',
            },
        ],
    },
    {
        name: '数据填报',
        code: 'PLAT_WATERMARK',
        context: '/water',
        icon: 'watermark',
        children: [
            {
                name: '数据录入',
                code: 'PLAT_STORAGE_STRATEGY',
                context: '/data/water_data',
            },
        ],
    },
]
/**
 * 页面按钮权限列表
 * 根据url + method进行匹配后台权限
 * 根据 tag 进行匹配页面按钮元素
 */
var OPERATE_AUTH = {}

export default {
    PAGESIZE_CONFIG,
    STATUS,
    NAV_LIST,
    OPERATE_AUTH,
    NAV_LIST_SOFTWARE,
}
