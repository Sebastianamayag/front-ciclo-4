import Router from 'vue-router'
import vue from 'vue'

Vue.use(Router)

export default new Router({
    mode:'history',
    base: process.env.BASE_URL,
    routes:[
        {
        path: '/',
        name: "root",
        component: App
        },

        {
            path:'/login',
            name: 'login',
            component: ()=>import('./views/Login')
        },

        {
            path:'/addbook',
            name: 'addbook',
            component: ()=>import('./views/AddBook')
        },

        /*{
        path: '/login', 
        name: "login", 
        component: Login
        },*/

        /*{
        path: '/main', 
        name: "Bienvenido", 
        component: LandingPage
        },*/
        
        /*{
        path:'/Carrito/:username',
        name: "Carrito",
        component: Carrito
        },
        
        {
        path:'/AddBook',
        name: "Nuevo libro",
        component: AddBook
        }*/
    ]
})