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