// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)

// const modulesFiles = require.context('./modules', false, /\.js$/)//遍历文件进行自动导入模块（false为是否遍历子目录）
// console.log(modulesFiles); //匹配js文件
// //reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。对空数组是不会执行回调函数的。
// const modules = modulesFiles.key().reduce((modules,modulePath) => {
//     const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1') 
//     const value = modulesFiles(modulePath)
//     modules[moduleName] = value.default
//     return modules
// },{})

// export default new Vuex.Store({
//     modules,
// })

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const modulesFiles = require.context('./modules', false, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})
export default new Vuex.Store({
    modules
})
