import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//全局导入element-plus和相应样式
// import ElementPlus from 'element-plus'
// import 'element-plus/theme-chalk/index.css'

//按需引入element-plus
import registerApp from './global'

const app = createApp(App)

//按需引入
// registerApp(app)
app.use(registerApp)

app.use(store)
app.use(router)
//全局引用，可以直接使用
// app.use(ElementPlus)

app.mount('#app')
