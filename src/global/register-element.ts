import { App } from 'vue'
//导入所需的组件
import 'element-plus/dist/index.css'
//导入所有图标
import {
  Monitor,
  DArrowLeft,
  DArrowRight,
} from '@element-plus/icons'

import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElIcon
} from 'element-plus/lib'

const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItemGroup,
  ElMenuItem,

  //图标
  ElIcon,
  Monitor,
  DArrowLeft,
  DArrowRight,
]

export default function registerElement(app: App): void {
  //遍历注册全局组件
  for (const component of components) {
    app.component(component.name, component)
  }
}
