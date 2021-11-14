import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import myAxios from '@/service'
//按需引入element-plus
import registerApp from './global'
//初始化css
import 'normalize.css'
import './assets/css/index.css'
//保持vuex刷新数据存在
import localVuex from './store'


const app = createApp(App)

//按需引入
app.use(registerApp)
app.use(store)
//先执行再注册路由
localVuex()
app.use(router)

app.mount('#app')

