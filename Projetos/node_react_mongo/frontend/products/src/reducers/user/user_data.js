import {NAME, CONT_LOGIN, TOKEN, RESET} from "../../actions/user/index";

const initialState = {
    name: "",
    cont_login: 0,
    token: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case NAME:
            return {
                ...state,
                name: action.name
            };
        case TOKEN:
            return {
                ...state,
                token: action.token
            };
        case CONT_LOGIN:
            return {
                ...state,
                cont_login: action.cont_login
            };
        case RESET:
            return {
                ...state,
                name: "",
                cont_login: 0,
                token: ""
            };
        default:
            return state;
    }
};