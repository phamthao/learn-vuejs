import { SET_USER, SET_METADATA } from '../types'
import AuthService from '@/services/userService'
import { delay, getOffset } from '@/utils/helpers'

const LIMIT = 2

const state = () => ({
    list: [],
    metadata: { total: 0, limit: LIMIT }
})

const getters = {
    list: (state) => state.list,
    metadata: (state) => state.metadata,
    totalPages: (state) => Math.round(state.metadata.total / state.metadata.limit)
}

const mutations = {
    [SET_USER](state, list) {
        state.list = list
    },
    [SET_METADATA](state, metadata) {
        state.metadata = {...state.metadata, ...metadata}
    }
}

const actions = {
    async getAll({ commit }, { page }) {
        const offset = getOffset(page, LIMIT)
        await delay(1000)
        const res = await AuthService.getAll({ limit: LIMIT, offset })
        commit(SET_USER, res.data.data)
        commit(SET_METADATA, { total: res.data.total })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
