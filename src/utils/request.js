import axios from "axios"

export function request(config) {

  const baseURL_dev = 'http://localhost:8081'

  const instance = axios.create({
    baseURL: baseURL_dev,
    timeout: 100000,
    headers: {
      'Context-Type': 'application/json;charset=UTF-8'
    }
  });

  // 请求拦截器
  instance.interceptors.request.use(config => {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  // 响应拦截器
  instance.interceptors.response.use(response => {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

  return  instance(config)
}

