
// const namespace = 
const routePath = '/two'
module.exports = [{
    path: routePath,
    name: 'two',
    icon: 'el-icon-s-opportunity',
    meta: { title: 'testone' },
    component: (resolve) => require(['@/layout/index'], resolve),
    redirect: `${routePath}/twoone`,
    children: [{
            path: `${routePath}/twoone`,
            name: 'twoone',
            meta: { title: 'one-one' },
            component: (resolve) => require(['@/view/two/twoone'], resolve)
        },
        {
            path: `${routePath}/twotwo`,
            name: 'twotwo',
            icon: '',
            meta: { title: 'onetwo' },
            component: (resolve) => require(['@/view/two/twotwo'], resolve)
        },
        {
            path: `${routePath}/twothree`,
            name: 'twothree',
            meta: { title: 'one-three' },
            component: (resolve) => require(['@/view/two/twothree'], resolve)
        }
    ]
}
]