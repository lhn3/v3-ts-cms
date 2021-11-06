import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import myAxios from '@/service'

// 全局导入element-plus和相应样式
// import ElementPlus from 'element-plus/lib'
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

//定义返回类型
interface DataType {
  data: any
  returnCode: string
  success: boolean
}

//发出请求
myAxios
  .request<DataType>({
    url: '/home/multidata',
    method: 'get'
  })
  .then((res) => {
    console.log(res)
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
