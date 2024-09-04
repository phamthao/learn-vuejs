import axios from 'axios'

const API_URL = 'http://127.0.0.1/user'

class UserService {
    getAll(params) {
        return axios.post(API_URL, params)
    }

    get(id) {
        return axios.get(`${API_URL}/${id}`)
    }
}

export default new UserService()
