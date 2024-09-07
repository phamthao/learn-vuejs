import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../types'
import AuthService from '@/services/authService'

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? {loggedIn: true, user }
  : {loggedIn: false, user: {} };

const state = () => (initialState)

const getters = {
    loggedIn: (state) => state.loggedIn,
}

const mutations = {
    [LOGIN_SUCCESS](state, user) {
        state.loggedIn = true
        state.user = user
    },
    [LOGIN_FAILURE](state) {
        state.loggedIn = false
        state.user = {}
    },
    [LOGOUT](state) {
        state.loggedIn = false
        state.user = {}
    }
}

const actions = {
    async login({ commit }, data) {
        const res = await AuthService.login(data)
        if (res.data.message) {
            commit(LOGIN_FAILURE)
            return res;
        }

        commit(LOGIN_SUCCESS, res.data)
        return res;
    },
    logout({ commit }) {
        AuthService.logout()
        commit(LOGOUT)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
