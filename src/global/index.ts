import { App } from 'vue'
import registerElement from './register-element'
import registerFilters from './register-filters'

export default function registerApp(app: App): void {
  registerElement(app)
  registerFilters(app)
}
