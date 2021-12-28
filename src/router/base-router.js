/**
 * 基础路由，不会通过权限控制
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
        meta: { slideHidden: true },
        redirect: '/login'
    },
    {
        path: '/home',
        name: 'home',
        meta: { title: '首页', slideHidden: false },
        icon: 'el-icon-warning',
        component: (resolve) => require(['@/view/layout/index'], resolve),
        redirect: '/homePage',
        children: [
            {
                path: '/homePage',
                name: 'homePage',
                meta: { title: '首页' },
                component: (resolve) => require(['@/view/page/homePage/index'], resolve)
            }
        ]
    },
    {
        path: '/one',
        name: 'one',
        icon: 'el-icon-s-opportunity',
        meta: { title: '目录一', slideHidden: false },
        component: (resolve) => require(['@/view/layout/index'], resolve),
        redirect: '/one/oneone',
        children: [{
            path: `/one/oneone`,
            name: 'oneone',
            meta: { title: 'one-one' },
            component: (resolve) => require(['@/view/page/one/oneone'], resolve)
        },
        {
            path: `/one/onetwo`,
            name: 'onetwo',
            icon: '',
            meta: { title: 'onetwo' },
            component: (resolve) => require(['@/view/page/one/onetwo'], resolve)
        },
        {
            path: `/one/onethree`,
            name: 'onethree',
            meta: { title: 'one-three' },
            component: (resolve) => require(['@/view/page/one/onethree'], resolve)
        }
        ]
    },
    {
        path: '/two',
        name: 'two',
        icon: 'el-icon-s-opportunity',
        meta: { title: '目录二',slideHidden:false },
        component: (resolve) => require(['@/view/layout/index'], resolve),
        redirect: `/two/twoone`,
        children: [{
                path: `/two/twoone`,
                name: 'twoone',
                meta: { title: 'one-one',slideHidden:false  },
                component: (resolve) => require(['@/view/page/two/twoone'], resolve)
            },
            {
                path: `/two/twotwo`,
                name: 'twotwo',
                icon: '',
                meta: { title: 'onetwo' },
                component: (resolve) => require(['@/view/page/two/twotwo'], resolve)
            },
            {
                path: `/two/twothree`,
                name: 'twothree',
                meta: { title: 'one-three' },
                component: (resolve) => require(['@/view/page/two/twothree'], resolve)
            }
        ]
    }
]

export default baseRouter