import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component:HomeView
        },
        {
            path:'/about',
            name:'about',
            component:()=>import('../views/AboutView.vue')
        },
        {
            path:'/demos',
            name:'demos',
            component:()=>import('@/demos/Index.vue'),
            children:[
                {
                    path:"element",
                    name:"element",
                    component:()=>import('@/demos/ElementDemo.vue')
                },
                {
                    path:"vuex",
                    name:"vuex",
                    component:()=>import('@/demos/VuexDemo.vue')
                }
            ]
        }
       
    ]
})
export default router