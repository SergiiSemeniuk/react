import { stopSubmit } from "redux-form";
import { authAPI, profileAPI } from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_USER_PROFILE = 'SET_AUTH_USER_PROFILE';
const IS_AUTH_USER = 'IS_AUTH_USER';
const SET_CAPTCHA = 'SET_CAPTCHA';
const IS_FETCHING = 'IS_FETCHING';

let initialState = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captcha: null,
    isCaptcha: false,
    profile: null
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            };
        case SET_AUTH_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case IS_AUTH_USER:
            return {
                ...state,
                isAuth: action.isAuth,
                usersId: action.id
            };
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.captchaUrl,
                isCaptcha: action.isCaptcha
            };
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const setAuthUserData = (usersId = null, email = null, login = null) => ({ type: SET_USER_DATA, payload: { usersId, email, login } });
export const setAuthUsersProfile = (profile) => ({ type: SET_AUTH_USER_PROFILE, profile });
export const isAuthUser = (isAuth, id = null) => ({ type: IS_AUTH_USER, isAuth, id });
export const setCaptcha = (captchaUrl = null, isCaptcha = false) => ({ type: SET_CAPTCHA, captchaUrl, isCaptcha });
export const toggleIsFetching = (isFetching) => ({ type: IS_FETCHING, isFetching });

export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.me()
    if (response.resultCode === 0) {
        let { id, email, login } = response.data;
        dispatch(setAuthUserData(id, email, login));
        return id;
    }
}
export const getAuthUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setAuthUsersProfile(response));
}

export const login = (formData) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const response = await authAPI.login(formData)
    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
    switch (response.data.resultCode) {
        case 0:
            dispatch(isAuthUser(true, response.data.data.userId));
            dispatch(getAuthUserProfile(response.data.data.userId))
            dispatch(setCaptcha(null, false));
            dispatch(toggleIsFetching(false));
            break;
        case 10:
            authAPI.securityCaptcha().then(response => {
                dispatch(stopSubmit('login', { _error: message }));
                dispatch(setCaptcha(response.data.url, true));
                dispatch(toggleIsFetching(false));
            });
            break;
        default:
            dispatch(stopSubmit('login', { _error: message }));
            dispatch(toggleIsFetching(false));
    }
}


export const logOutUser = () => async (dispatch) => {
    const response = await authAPI.LogOut()
    if (response.data.resultCode === 0) {
        dispatch(isAuthUser(false));
    }
}

export default authReducer;