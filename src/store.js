import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    headerHeight: 0
  },
  mutations:{
    headerHeightState(state,headerHeight) {
      state.headerHeight=headerHeight
    }
  },
  actions:{
    setHeaderHeight({commit},headerHeight) {
   commit('headerHeightState',headerHeight)
    }
  },
  getters:{

  }
});
export default store;
