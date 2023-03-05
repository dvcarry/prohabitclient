import axios from 'axios';

const getToken = () => JSON.parse(localStorage.getItem('prohabit'))?.token;

// axios.defaults.baseURL = 'http://localhost:5118';
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://prohabit.ru/' : 'http://localhost:5118';

axios.interceptors.request.use(
    config => {
        config.headers['Authorization'] = `Bearer ${getToken()}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


export const api = {
    async registration(userData) {
        try {
            const { data } = await axios.post('/api/auth/registration', userData)
            return data
        } catch (error) {
            console.log('error', error)
        }
    },
    async login(userData) {
        try {
            const { data } = await axios.post('/api/auth/login', userData)
            return data
        } catch (error) {
            console.log('error', error)
        }
    },
    async changeUserName(name) {
        try {
            const { data } = await axios.patch('/api/users', { name })
            return data
        } catch (error) {
            console.log('error', error)
        }
    },
    async getHabits() {
        try {
            const { data } = await axios.get('/api/habits')
            return data
        } catch (error) {
            console.log('error', error)
        }
    },
    async addUserHabit(habit_id) {
        try {
            const { data } = await axios.post('/api/habits', { habit_id })
            return data
        } catch (error) {
            console.log('error', error)
        }
    },
    async getTeam() {
        try {
            const { data } = await axios.get('/api/teams')
            return data
        } catch (error) {
            console.log('error', error)
        }
    },
    async addDone(userData) {
        try {
            const { data } = await axios.post('/api/dones', userData)
            return data
        } catch (error) {
            console.log('error', error)
        }
    },
    async getDones() {
        try {
            const { data } = await axios.get('/api/dones')
            return data
        } catch (error) {
            console.log('error', error)
        }
    },
    async getUser() {
        try {
            const { data } = await axios.get('/api/users')
            return data
        } catch (error) {
            console.log('error', error)
        }
    },
    async addPost(text) {
        try {
            const { data } = await axios.post('/api/posts', { text })
            return data
        } catch (error) {
            console.log('error', error)
        }
    },
}