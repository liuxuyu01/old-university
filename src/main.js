import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui' //element-ui的全部组件
import router from './router'

import 'element-ui/lib/theme-chalk/index.css' //element-ui的css
import '@/styles/common.scss' //全局样式及变量

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
