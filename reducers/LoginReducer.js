import { LOGIN_FAILURE, LOGIN_SUCCESS, PASSWORD_CHANGED, SECURE_TEXT_CHANGED, USER_NAME_CHANGED } from "../actions/types"

const INITIAL_STATE = {
    userName:"X4432",
    password:"qwe",
    isSecureText:true,
    userId:null,
    errorMessage:null
}

export default (state=INITIAL_STATE, action) => {
    console.log(state);
    switch (action.type) {
        case USER_NAME_CHANGED:
            return {...state, userName:action.payload}
        case PASSWORD_CHANGED:
            return {...state, password:action.payload}
        case SECURE_TEXT_CHANGED:
            return {...state, isSecureText:action.payload}
        case LOGIN_SUCCESS:
            return {...state,errorMessage:null, userId:action.payload}
        case LOGIN_FAILURE:
            return {...state, userId:null, errorMessage:action.payload, userName:"", password:""}
    
    
        default:
            return state
    }    
}