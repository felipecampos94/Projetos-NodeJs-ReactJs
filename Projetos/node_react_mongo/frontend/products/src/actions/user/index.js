export const NAME = "NAME";
export const CONT_LOGIN = "CONT_LOGIN";
export const TOKEN = "TOKEN";
export const RESET = "RESET";

export const name = name => ({
    type: NAME,
    name: name
});
export const cont_login = cont_login => ({
    type: CONT_LOGIN,
    cont_login: cont_login
});

export const token = token => ({
    type: TOKEN,
    token: token
});

export const reset = () => ({type: RESET});