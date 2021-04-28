import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const IS_USER_FOLLOWED = 'IS_USER_FOLLOWED';
const SET_USER_POST_LIKE = 'SET_USER_POST_LIKE';
const SET_USER_PHOTOS = 'SET_USER_PHOTOS';

let initialState = {
    posts: [
        { id: 2, message: 'Hi, how a You?', likesCount: 20 },
        { id: 1, message: 'It\'s my first post', likesCount: 3 }
    ],
    profile: null,
    userStatus: '',
    isFollowed: null 
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: Math.max(...state.posts.map(el => el.id + 1).values()),
                message: action.newMyPost,
                likesCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts]
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
        case IS_USER_FOLLOWED:
            return {
                ...state,
                isFollowed: action.isFollowed
            };
        case SET_USER_POST_LIKE:
            return {
                ...state,
                posts: [...state.posts.map(el => {
                    if (el.id === action.postId) {
                        el.likesCount = el.likesCount + 1;
                        return el;
                    }
                    return el;
                })]
            };
        case SET_USER_PHOTOS:
            debugger
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.userPhotos
                }
            };
        default:
            return state;
    }
}

export const addNewPost = (newMyPost) => ({ type: ADD_POST, newMyPost });
const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });
const setIsFollowedUser = (isFollowed) => ({ type: IS_USER_FOLLOWED, isFollowed });
export const setUserPostLike = (postId) => ({ type: SET_USER_POST_LIKE, postId });
const setUserPhotos = (userPhotos) => ({ type: SET_USER_PHOTOS, userPhotos });


export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUsersProfile(response));
}

export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data));
}

export const updateUserStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export const getIsFollowedUser = (userId) => (dispatch) => {
    profileAPI.isFollowedUser(userId).then((response) => {
        dispatch(setIsFollowedUser(response));
    })

}

export const savePhoto = (image) => async (dispatch) => {   
    const response = await profileAPI.setMainPhoto(image);
    if (response.data.resultCode === 0) {
        dispatch(setUserPhotos(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    debugger
    const userId = getState().auth.usersId;
    
    const response = await profileAPI.putProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }
    if (response.data.resultCode === 1) {        
        dispatch(stopSubmit('profileFormData', { _error: response.data.messages[0] }));
        return Promise.reject();
    }

    
}



export default profileReducer;