import { App } from 'vue'
//导入所需的组件
import 'element-plus/dist/index.css'
import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge
} from 'element-plus/lib'

const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge
]

export default function registerElement(app: App): void {
  //遍历注册全局组件
  for (const component of components) {
    app.component(component.name, component)
  }
}
