import { SET_LIST, SET_DETAIL, SET_METADATA } from '../types'
import AuthService from '@/services/userService'
import { delay, getOffset } from '@/utils/helpers'

const LIMIT = 2

const state = () => ({
    list: [],
    detail: {},
    metadata: { total: 0, limit: LIMIT }
})

const getters = {
    list: (state) => state.list,
    detail: (state) => state.detail,
    metadata: (state) => state.metadata,
    totalPages: (state) => Math.round(state.metadata.total / state.metadata.limit)
}

const mutations = {
    [SET_LIST](state, list) {
        state.list = list
    },
    [SET_DETAIL](state, detail) {
        state.detail = detail
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
        commit(SET_LIST, res.data.data)
        commit(SET_METADATA, { total: res.data.total })
    },
    async get({ commit }, id) {
        await delay(1000)
        const res = await AuthService.get(id)
        commit(SET_DETAIL, res.data)
    },
    async create(_, {data}) {
        await delay(1000)
        const res = await AuthService.create(data)
        return res;
    },
    async update(_, {id, data}) {
        await delay(1000)
        const res = await AuthService.update(data, id)
        return res;
    },
    async delete(_, {id}) {
        await delay(1000)
        const res = await AuthService.delete(id)
        return res;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
