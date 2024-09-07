import axios from 'axios'

const API_URL = 'http://127.0.0.1/api/login'

class AuthService {
    login(data) {
        return axios.post(API_URL, data)
    }

    logout() {
        localStorage.removeItem('user');
    }
}

export default new AuthService()
