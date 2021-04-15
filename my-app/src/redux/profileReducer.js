import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const IS_USER_FOLLOWED = 'IS_USER_FOLLOWED';

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
                id: 3,
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
        default:
            return state;
    }
}

export const addNewPost = (newMyPost) => ({ type: ADD_POST, newMyPost });
const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });
const setIsFollowedUser = (isFollowed) => ({ type: IS_USER_FOLLOWED, isFollowed });

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
    profileAPI.isFollowedUser(userId).then((response)=>{       
        dispatch(setIsFollowedUser(response));     
    })
    
}



export default profileReducer;