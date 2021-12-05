import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
const TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function filterTime(value: string, style: string = TIME_FORMAT) {
  //日期时间格式转换
  return dayjs.utc(value).utcOffset(8).format(style)
}
