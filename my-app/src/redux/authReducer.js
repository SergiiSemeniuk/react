import { authAPI} from "../api/api";



const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';
const IS_AUTH_USER = 'IS_AUTH_USER';




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
            case IS_AUTH_USER:
            return {
                ...state,
                isAuth: action.isAuth,
                usersId: action.id
            };
           

        default:
            return state;
    }
}

export const setAuthUserData = (usersId = null, email = null, login = null) => ({ type: SET_USER_DATA, data: { usersId, email, login } });
export const setAuthUserPhoto = (usersPhoto) => ({ type: SET_USER_PHOTO, usersPhoto });
export const isAuthUser = (isAuth, id) => ({ type: IS_AUTH_USER, isAuth, id  });


export const getAuthUserData = () => {
  
    return (dispatch) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setAuthUserData(id, email, login));
                             
            }            
        })
    }
}

export const getAuthUserId = (formData) => {
    return (dispatch) => {
        authAPI.postLogin(formData).then(response => {            
            if (response.data.resultCode === 0) {
               
                dispatch(isAuthUser(true, response.data.data.userId));
               
            }            
        })
           
        
    }
}

export const logOutUser = () => {
    return (dispatch) => {
        authAPI.LogOut().then(response => {            
            if (response.data.resultCode === 0) {
                dispatch(isAuthUser(false));                
            }            
        })
    }
}


export default authReducer;