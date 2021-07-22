import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 引入 iconfont
import "@/assets/iconfont/iconfont.css"

// 引入 swiper 样式
import 'swiper/swiper.scss';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
