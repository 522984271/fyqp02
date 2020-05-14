import Vue from 'vue'
import VueRouter from 'vue-router'
import First from '../First';
import login from "../views/login";

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/first'
    },
    {
        path: '/first',
        name: 'First',
        component:First,
        children:[
            {path: '',component:login},
            {path: 'login',name:'Login',component: () => import('../views/login')},
            {path: 'register',name:'Register',component: () => import('../views/register')}
        ]
    },
    {
        path:'/index',
        name: 'index',
        component: () => import('../index')
    },
    {
        path:'/test01',
        name: 'test01',
        component: () => import('../views/test')
    }

]

const router = new VueRouter({
    routes
})

export default router
