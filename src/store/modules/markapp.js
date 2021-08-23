const markapp ={
  namespaced: true,
  state: {
    isfooterShow: true
  },
  getters: {
    
  },
  mutations: {
    updataFooterShow(state, payload){
      state.isfooterShow = payload
    }
  },
  actions: {
    
  }
}

export default markapp