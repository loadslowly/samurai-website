import {authAPI, securityAPI} from "../Api/Api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = "AUTH/SET_AUTH_USER_DATA";
const SET_CAPTCHA_URL_SUCCESS = "AUTH/SET_CAPTCHA_URL_SUCCESS";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case SET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                ...action.payload
            };
        }
        default:
            return state;
    }

    return state;
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {id, email, login, isAuth}
});

export const getCaptchaURL = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaURL();
    const captchaURL = response.data.url;
    dispatch(getCaptchaURLSuccess(captchaURL));
}

export const getCaptchaURLSuccess = (captchaURL) => ({
    type: SET_CAPTCHA_URL_SUCCESS,
    payload: {captchaURL}
});

export const getAuth = () => async (dispatch) => {
    let response = await authAPI.me();

    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
        dispatch(getAuth());
        dispatch(getCaptchaURLSuccess(null));
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaURL());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default AuthReducer;