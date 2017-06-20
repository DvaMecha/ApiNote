import Vue from 'vue'
import Vuex from 'vuex'
//import userInfo from './modules/user_info'
Vue.use(Vuex)

const state = {
  projects: [],
  apis: [],
  activeApi: {}
}
const mutations = {
  GET_LIST(state, data) {
    state.applyList = data;
  },
}
const actions = {
  getListAction(context, data) {
    //dispatch('GET_LIST',data)
    context.commit('GET_LIST', data)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
