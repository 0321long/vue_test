import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    createFunc(state){
      state.count++
    }
  },
  actions: {},
  modules: {},
});
