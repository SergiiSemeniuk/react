import {combineReducers, createStore} from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import siteBarReducer from './siteBarReducer';

// const { createStore } = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    siteBar: siteBarReducer
});

let store = createStore(reducers);

export default store;