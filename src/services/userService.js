import axios from 'axios'

const API_URL = 'http://127.0.0.1/api/user'

class UserService {
    getAll(params) {
        return axios.post(API_URL, params)
    }

    get(id) {
        return axios.get(`${API_URL}/${id}`)
    }

    create(data) {
        return axios.post(`${API_URL}/add`, data)
    }

    update(data, id) {
        return axios.put(`${API_URL}/${id}`, data)
    }

    delete(id) {
        return axios.delete(`${API_URL}/${id}`)
    }
}

export default new UserService()
