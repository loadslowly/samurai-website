import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import AppReducer from "./AppReducer";

let reducers = combineReducers({
    profileData: ProfileReducer,
    dialogsData: DialogsReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer,
    App: AppReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;

