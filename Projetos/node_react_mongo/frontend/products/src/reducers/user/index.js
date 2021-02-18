import {createStore, combineReducers} from "redux";
import userReducer from "./user_data";

const root = combineReducers({
    user: userReducer
});

const store = createStore(root);

export {store};