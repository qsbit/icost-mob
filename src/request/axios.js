import axios from "axios";
import { Toast } from 'antd-mobile';

const MODE = import.meta.env.MODE // 环境变量

const LOCAL_URL = 'http://localhost:7001'; //本地
const DEMO_URL = 'http://api.chennick.wang'; //在线

// baseUrl
axios.defaults.baseURL = MODE == 'development' ? LOCAL_URL : DEMO_URL
// 允许跨域携带cookie信息
axios.defaults.withCredentials = true
// 请求头设置
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// 在前端设置好 token，服务端通过获取请求头中的 token 去验证每一次请求是否合法
axios.defaults.headers['Authorization'] = `${localStorage.getItem('token') || null}`
// 请求体类型
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 响应体处理
axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    Toast.show('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.code != 200) {
    if (res.data.msg) Toast.show(res.data.msg)
    if (res.data.code == 401) {
      window.location.href = '/login'
    }
    return Promise.reject(res.data)
  }

  return res.data
})

export default axios