<<<<<<< HEAD
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import './assets/main.scss'
import axios from 'axios';
// import change from "@/directives/change";
// import admin from "@/directives/admin";
// import router from './router'
// import store from './store'

import { createApp } from 'vue'
import "@/mockjs/index";
import App from './App.vue'
// console.log(axios.get('https://movie.querydata.org/api'))


const app = createApp(App)
// app.directive(change.name,change)
// app.directive(admin.name,admin)
// app.use(router)
// app.use(store)
// axios.get("/data/list").then(res => {
//     console.log(res);
//   }).catch(error => {
//     console.log(error);
//   })



app.use(ElementPlus);
app.mount('#app')
=======

// 1. 引入你需要的组件
import { Button, NavBar, Icon, Sticky, Tabs, Tab, Loading } from "vant";
import ElementPlus from "element-plus";
// 2. 引入组件样式(一定要引入在自己的样式之前，以方便我们自己的样式去覆盖它)
import "vant/lib/index.css";
import "element-plus/dist/index.css";
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
const app = createApp(App)
app.use(ElementPlus);
app.use(router)
app.mount('#app')
// 3. 注册你需要的组件
app.use(Button);
app.use(NavBar);
app.use(Icon);
app.use(Sticky);
app.use(Tabs);
app.use(Tab);
app.use(Loading);
>>>>>>> 838ec6ce43753faff6d469438ff8b37fdf62df3d
