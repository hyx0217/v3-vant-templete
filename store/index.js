import { getUser, login } from '@/api/login'
import Vuex from 'vuex'
import { getToken, removeToken, setToken } from '../utils/auth'

export default Vuex.createStore({
  state: {
    token: getToken(),
    user: ''
  },
  getters:{
    user:state=>state.user
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER(state, payload) {
      state.user = payload
    },
  },
  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then((res) => {
            setToken(res.data.token)
            commit('SET_TOKEN', res.data.token)
            commit('SET_USER', res.data)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    // 获取登录用户信息
    GetUser({ commit }) {
      return new Promise((resolve, reject) => {
        getUser()
          .then((res) => {
            commit('SET_USER', res.data)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    // 登出
    Logout({ commit }) {
      removeToken()
      commit('SET_TOKEN', '')
      commit('SET_USER', '')
    },
  },
  modules: {},
})
