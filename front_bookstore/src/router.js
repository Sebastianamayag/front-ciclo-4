import vueRouter from 'vue-router'
//import Login from './components/Login'
import App from './App'

const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: "root",
                component: App
            },
            {
                path: '/login',
                name: "login",
                component: () => import('./components/Login.vue')
            },
            
        ]
    })
export default router