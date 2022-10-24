import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "8ec336b3-573d-4e2c-b5c8-0b7d0d9eb990"
    }
});

export const usersAPI = {
    getUsers(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data);
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI.')
        return profileAPI.getProfile(userId);
    },
    deleteFollow(userId) {
        return  instance.delete(`follow/${userId}`)
    },
    addFollow(userId){
        return  instance.post(`follow/${userId}`, {})
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId).then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId).then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status});
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
}


