import Vue from "vue";
import Router from 'vue-router'
import baseRouter from './base-router'
Vue.use(Router)

const createRouter = () =>
    new Router({
        scrollBehavior: () => ({ y: 0 }),
        routes: [...baseRouter]
    })

const router = createRouter()    

export default router