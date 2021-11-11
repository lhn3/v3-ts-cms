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
//导入所有图标
import * as Icon from '@element-plus/icons'

const app = createApp(App)

console.log(Icon)

// for(let i of Icon){
//   app.component(i.name, i)
// }


//按需引入
app.use(registerApp)

app.use(store)
app.use(router)

app.mount('#app')
localVuex()
//定义返回类型--------------------------------------------------------------------
// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }
//
// //发出请求
// myAxios
//   .request<DataType>({
//     url: '/home/multidata',
//     method: 'get'
//   })
//   .then((res) => {
//     console.log(res)
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })
