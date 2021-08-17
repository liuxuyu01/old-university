/**
 * 基础路由，不会通过权限控制
 */

const baseRouter = [
    {
        path: '/404',
        name: '404',
        component: (resolve) => require(['@/view/error/404'], resolve)
    },
    {
        path: '/500',
        name: '500',
        component: (resolve) => require(['@/view/error/500'], resolve)
    },
    {
        path: '',
        component: (resolve) => require(['@/layout/index'], resolve),
        redirect: '/homePage',
        children: [
            {
                path: '/homePage',
                name: 'homePage',
                meta: { title: '首页' },
                component: (resolve) => require(['@/view/homePage/index'], resolve)
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: (resolve) => require(['@/view/login/index'], resolve)
    },
    {
        path: '/one',
        name: 'one',
        meta: { title: 'testone' },
        // component: (resolve) => require(['@/view/one/oneone'], resolve),
        redirect: '/one/oneone',
        children:[
            {
                path: 'oneone',
                name: 'oneone',
                meta: { title: 'one-one' },
                component: (resolve) => require(['@/view/one/oneone'], resolve)
            },
            {
                path: 'onetwo',
                name: 'onetwo',
                meta: { title: 'onetwo' },
                component: (resolve) => require(['@/view/one/onetwo'], resolve)
            },
            {
                path: 'onethree',
                name: 'onethree',
                meta: { title: 'one-three' },
                component: (resolve) => require(['@/view/one/onethree'], resolve)
            }
        ]
        
    }
]

export default baseRouter