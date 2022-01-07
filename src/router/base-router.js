/**
 * 基础路由
 */
const baseRouter = [
    {
        path: '/404',
        name: '404',
        meta: { title: '400', slideHidden: true },
        component: (resolve) => require(['@/view/error/404'], resolve)
    },
    {
        path: '/500',
        name: '500',
        meta: { title: '500', slideHidden: true },
        component: (resolve) => require(['@/view/error/500'], resolve)
    },
    {
        path: '/login',
        name: 'login',
        meta: { title: '登录', slideHidden: true },
        component: (resolve) => require(['@/view/login/index'], resolve)
    },
    {
        path: '/',
        name: 'home',
        component: (resolve) => require(['@/view/login'], resolve),
    },
    {
        path: '/homePage',
        name: 'homePage',
        component: (resolve) => require(['@/view/page/HomePage'], resolve),
    }
]

export default baseRouter