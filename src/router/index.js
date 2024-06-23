import { createRouter, createWebHistory } from 'vue-router';
import forma from '@/views/study/form.vue'
import tablea from '@/views/study/table.vue'
const routes=[
{
    // name:'xian',
    // path:'/news/:id/:title/:content',
    // component:news,
    // props:route=>({
    //     id:route.params.id,
    //     title:route.params.title,
    //     content:route.params.content
    //     // 把对象中每一对key-value作为参数传给xian组件
    // })
    
    path:'/studyform',
    component:forma,
    meta:{hideTitle:true,isTabPage:true,title:'shu'}

},
{
    path:'/studytable',
    component:tablea
}


]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router