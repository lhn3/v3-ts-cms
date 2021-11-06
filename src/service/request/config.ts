//不同环境定义不同的环境变量
let BASE_URL = ''
let BASE_NAME = ''
const TIME_OUT = 3000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000/'
  BASE_NAME = 'development'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://123.207.32.32:8000/'
  BASE_NAME = 'production'
} else {
  BASE_URL = 'http://123.207.32.32:8000/'
  BASE_NAME = 'test'

}

export {
  BASE_URL,
  BASE_NAME,
  TIME_OUT
}
