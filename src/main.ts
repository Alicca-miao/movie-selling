
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
