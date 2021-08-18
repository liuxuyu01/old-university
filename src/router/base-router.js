/**
 * 基础路由，不会通过权限控制
 */
const oneRouter = require('../view/one/router')
const twoRouter = require('../view/two/router')

const baseRouter = [
    {
        path: '/404',
        name: '404',
        icon: 'el-icon-user-solid',
        component: (resolve) => require(['@/view/error/404'], resolve)
    },
    {
        path: '/500',
        name: '500',
        icon: 'el-icon-picture',
        component: (resolve) => require(['@/view/error/500'], resolve)
    },
    {
        path: '/',
        name: 'home',
        icon: 'el-icon-warning',
        component: (resolve) => require(['@/layout/index'], resolve),
        redirect: '/homePage',
        children: [{
            path: '/homePage',
            name: 'homePage',
            meta: { title: '首页' },
            component: (resolve) => require(['@/view/homePage/index'], resolve)
        }]
    },
    {
        path: '/login',
        name: 'login',
        icon: 'el-icon-s-goods',
        component: (resolve) => require(['@/view/login/index'], resolve)
    },
    ...oneRouter,...twoRouter
]

export default baseRouter