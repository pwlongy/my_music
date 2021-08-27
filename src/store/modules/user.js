// 保存用户基本信息
const user = {
  namespaced: true,
  state: {
    user: {}
  },
  getters: {
    
  },
  mutations: {
    getUserMessage(state, payload){
      console.log(payload)
      state.user = payload
    }
  },
  actions: {
    
  }
}

export default user