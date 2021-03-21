import { authAPI, usersAPI } from "../api/api";
import { setUsersProfile } from "./profileReducer";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';


let initialState = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    usersPhoto: null
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
                usersPhoto: action.usersPhoto,

            };

        default:
            return state;
    }
}

export const setAuthUserData = (usersId, email, login) => ({ type: SET_USER_DATA, data: { usersId, email, login } });
export const setAuthUserPhoto = (usersPhoto) => ({ type: SET_USER_PHOTO, usersPhoto });

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setAuthUserData(id, email, login));
                return id;              
            }            
        }).then((id) => {
            usersAPI.getProfile(id).then(data => {
                dispatch(setAuthUserPhoto(data.photos.small));
                dispatch(setUsersProfile(data));
            })
        } );

    }
}


export default authReducer;