import { App } from 'vue'
import registerElement from './register-element'
import registerFilter from './register-filter'

export default function registerApp(app: App): void {
  registerElement(app)
  registerFilter(app)
}
