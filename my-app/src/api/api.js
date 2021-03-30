import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b25870ec-c92a-4cdc-8474-6c98a4566efd"
    }

})

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },

    followUser(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => response.data);
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    postLogin(formData) {
        return instance.post('auth/login', formData)
    }
}

export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, {status})
    }

}


