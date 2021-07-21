
const baseURL_dev = "http://localhost:8080/",

const axios = axios.create({
    baseURL: baseURL_dev,
    timeout: 7000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  axios.interceptors.request.use(config => {
    // Do something before request is sent
    return config;
  });

// Add a response interceptor
axios.interceptors.response.use(response => {
    
    return response;
  }, function (error) {
   
    return Promise.reject(error);
  });

  export default axios