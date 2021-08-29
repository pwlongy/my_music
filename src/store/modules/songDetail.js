const songDetail = {
  namespaced: true,
  state: {
    playMusicId: null,
    playMusicDetail: []
  },
  getters: {
    
  },
  mutations: {
    getMusicId(state, payload){
      state.playMusicId = payload
    },
    getMusicDetail(state, paylaod){
      state.playMusicDetail = paylaod
    }
  },
  actions: {
    
  }
}
export default songDetail