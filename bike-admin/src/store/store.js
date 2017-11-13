import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex);

const state = {
  count: 0,
  user: {},
  token: null,
  title: ''
};

const mutations = {
  INCREMENT (state) {
    state.count++
  },
  SIDEBAR (state, status = true) {
    state.config.sidebar = status
  },
  [types.LOGIN]: (state, data) => {
    localStorage.token = data.access_token;
    localStorage.refresh_token = data.refresh_token;
    state.token = data.access_token;
  },
  [types.LOGOUT]: (state) => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    state.token = null
  },
  [types.TITLE]: (state, data) => {
    state.title = data;
  }
};

const actions = {
  INCREMENT ({commit}) {
    commit('INCREMENT')
  },
  INCREMENT_ASYNC ({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  },

  // Sidebar: show, hide, toggle
  SHOW_SIDEBAR ({commit}) {
    commit('SIDEBAR', true)
  },
  HIDE_SIDEBAR ({commit}) {
    commit('SIDEBAR', false)
  },
  TOGGLE_SIDEBAR ({commit, state}) {
    commit('SIDEBAR', !state.config.sidebar)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
});

export default store

