

/* 权限展示的路有 */
const adminRouter = require('../view/permission/router')

//需要权限控制的路由
const permissionRouter = [...adminRouter]

export default permissionRouter