
// const namespace = 
const routePath = '/one'
module.exports = [{
    path: routePath,
    name: 'one',
    icon: 'el-icon-s-opportunity',
    meta: { title: '目录一',slideHidden:false },
    component: (resolve) => require(['@/layout/index'], resolve),
    redirect: '/one/oneone',
    children: [{
            path: `${routePath}/oneone`,
            name: 'oneone',
            meta: { title: 'one-one' },
            component: (resolve) => require(['@/view/one/oneone'], resolve)
        },
        {
            path: `${routePath}/onetwo`,
            name: 'onetwo',
            icon: '',
            meta: { title: 'onetwo' },
            component: (resolve) => require(['@/view/one/onetwo'], resolve)
        },
        {
            path: `${routePath}/onethree`,
            name: 'onethree',
            meta: { title: 'one-three' },
            component: (resolve) => require(['@/view/one/onethree'], resolve)
        }
    ]
}
]