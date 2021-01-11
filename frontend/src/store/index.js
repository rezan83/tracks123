import { createStore } from "vuex";
import {shipments} from "./shipments";
export default createStore({
  state: {
    userName: "",
  },
  getters: {
    getUserName(state){
      return state.userName
    }
  },
  mutations: {
    setUserName(state, payload) {
      state.userName = payload;
    },
  },
  actions: {
    logUser({ commit }, userName) {
      commit("setUserName", userName);
    },
  },
  modules: {
    shipments,
  },
});
