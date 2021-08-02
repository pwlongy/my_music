import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import {
  MessageBox,
  Message
} from "element-ui"
Vue.prototype.$confirm = MessageBox
Vue.prototype.$message = Message
// 引入 iconfont
import "@/assets/iconfont/iconfont.css"

// 引入 swiper 样式

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
