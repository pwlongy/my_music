import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import markapp from "./modules/markapp.js"
import user from './modules/user.js'
import songDetail from './modules/songDetail.js'

export default new Vuex.Store({
  modules: {
    markapp,
    user,
    songDetail
  }
})
