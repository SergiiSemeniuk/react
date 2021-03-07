import {combineReducers, createStore} from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import siteBarReducer from './siteBarReducer';
import usersReducer from "./usersReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    siteBar: siteBarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;