import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how a You?', likesCount: 20 },
        { id: 2, message: 'It\'s my first post', likesCount: 3 }
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
 
    switch (action.type) {
        case ADD_POST:             
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };    
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            };      
         
        case UPDATE_NEW_POST_TEXT:  
           return {
                ...state,
                newPostText: action.newText
            };   
            case SET_USER_PROFILE:   
                   
           return {
                ...state,
                profile: action.profile
            };                     
           
        default:
            return state;
    }
}

export const addNewPost = () => ({ type: ADD_POST });
export const onPostChange = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(data => {
            dispatch(setUsersProfile(data));
          });
    }
}


export default profileReducer;