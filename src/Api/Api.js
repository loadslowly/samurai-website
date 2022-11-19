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
    deleteFollow(userId) {
        return  instance.delete(`follow/${userId}`)
    },
    addFollow(userId){
        return  instance.post(`follow/${userId}`, {})
    },
    savePhoto(photoFile) {
        const formData =  new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
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
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

export const securityAPI = {
    getCaptchaURL() {
        return instance.get(`security/get-captcha-url`);
    },
}


