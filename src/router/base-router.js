/**
 * 基础路由，不会通过权限控制
 */
const oneRouter = require('../view/one/router')
const twoRouter = require('../view/two/router')

const baseRouter = [
    {
        path: '/404',
        name: '404',
        meta: { title: '400',slideHidden:true },
        component: (resolve) => require(['@/view/error/404'], resolve)
    },
    {
        path: '/500',
        name: '500',
        meta: { title: '500',slideHidden:true },
        component: (resolve) => require(['@/view/error/500'], resolve)
    },
    {
        path: '/login',
        name: 'login',
        meta: { title: '登录',slideHidden:true },
        component: (resolve) => require(['@/view/login/index'], resolve)
    },
    {
        path: '/',
        name: 'home',
        meta: { slideHidden:true },
        redirect: '/login'
    },
    {
        path: '/home',
        name: 'home',
        meta: { title: '首页', slideHidden:false },
        icon: 'el-icon-warning',
        component: (resolve) => require(['@/layout/index'], resolve),
        redirect: '/homePage',
        children:[
            {
                path: '/homePage',
                name: 'homePage',
                meta: { title: '首页' },
                component: (resolve) => require(['@/view/homePage/index'], resolve)
            }
        ]
    },
    ...oneRouter, ...twoRouter
]

export default baseRouter