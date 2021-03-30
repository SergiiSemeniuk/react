import { authAPI, profileAPI } from "../api/api";
import { setUsersProfile } from "./profileReducer";
import { Redirect } from 'react-router';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';
const SET_FORM_DATA = 'SET_FORM_DATA';


let initialState = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    usersPhoto: null,
    formData: {}
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case SET_USER_PHOTO:
            return {
                ...state,
                usersPhoto: action.usersPhoto
            };
            case SET_FORM_DATA:
            return {
                ...state,
                formData: action.formData
            };

        default:
            return state;
    }
}

export const setAuthUserData = (usersId = null, email = null, login = null) => ({ type: SET_USER_DATA, data: { usersId, email, login } });
export const setAuthUserPhoto = (usersPhoto) => ({ type: SET_USER_PHOTO, usersPhoto });
export const setUserFormData = (formData) => ({ type: SET_FORM_DATA, formData });

export const getAuthUserData = () => {
  
    return (dispatch) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setAuthUserData(id, email, login));
                return id;              
            }            
        }).then((id) => {
            profileAPI.getProfile(id).then(data => {
                dispatch(setAuthUserPhoto(data.photos.small));
                dispatch(setUsersProfile(data));
            })
        } );
    }
}

export const getAuthUserId = (formData) => {
    return (dispatch) => {
        authAPI.postLogin(formData).then(response => {
            
            if (response.data.resultCode === 0) {
                
                getAuthUserData();                    
            }            
        })
    }
}


export default authReducer;