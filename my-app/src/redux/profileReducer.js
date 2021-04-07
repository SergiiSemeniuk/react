import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how a You?', likesCount: 20 },
        { id: 2, message: 'It\'s my first post', likesCount: 3 }
    ],  
    profile: null,
    userStatus: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.newMyPost,
                likesCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
              
            };

        case SET_USER_PROFILE:

            return {
                ...state,
                profile: action.profile
            };
            case SET_USER_STATUS:

                return {
                    ...state,
                    userStatus: action.status
                }; 

        default:
            return state;
    }
}

export const addNewPost = (newMyPost) => ({ type: ADD_POST, newMyPost });
export const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

export const getUserProfile = (userId) => {

    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUsersProfile(data));
        });
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
        .then(response => {
            
            dispatch(setUserStatus(response.data));
        });
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {        
        profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0){
            dispatch(setUserStatus(status));
            }
        });
    }
}


export default profileReducer;