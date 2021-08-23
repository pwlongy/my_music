import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import remarks from "./modules/remarks.js"
import markapp from "./modules/markapp.js"

export default new Vuex.Store({
  modules: {
    remarks,
    markapp
  }
})
