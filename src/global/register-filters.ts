import { App } from 'vue'
import { filterTime } from '@/utils/filterTime'

export default function registerFilters(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return filterTime(value)
    }
  }
}
