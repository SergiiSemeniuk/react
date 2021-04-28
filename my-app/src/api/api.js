import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b25870ec-c92a-4cdc-8474-6c98a4566efd"
    }

})

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10, friend = null) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&friend=${friend}`)
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
    login(formData) {
        return instance.post('auth/login', formData);
    },
    LogOut() {
        return instance.delete('auth/login');
    },
    securityCaptcha() {
        return instance.get(`security/get-captcha-url`);
    }
}

export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, { status });
    },
    isFollowedUser(userId) {
        return instance.get(`follow/${userId}`)
            .then(response => response.data);
    },
    setMainPhoto(image) {
        const formData = new FormData();
        formData.append('image', image);
        return instance.put(`/profile/photo`, formData);
    },
    putProfile(profile) {
        return instance.put(`profile`, profile );            
    }

}


