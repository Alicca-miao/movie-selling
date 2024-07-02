import './assets/main.css'
import { Button, NavBar, Icon, Sticky, Tabs, Tab, Loading } from "vant";

// 2. 引入组件样式(一定要引入在自己的样式之前，以方便我们自己的样式去覆盖它)
import "vant/lib/index.css";
import router from './router'
// import store from "./store"

import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

// 3. 注册你需要的组件

const app = createApp(App)
app.use(router)
// app.use(store)
app.use(ElementPlus)
app.use(Button);
app.use(NavBar);
app.use(Icon);
app.use(Sticky);
app.use(Tabs);
app.use(Tab);
app.use(Loading);
app.mount('#app')
