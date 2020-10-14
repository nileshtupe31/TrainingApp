import { SECURE_TEXT_CHANGED, USER_NAME_CHANGED, PASSWORD_CHANGED } from "./types"

export const userNameChanged = (text) => {
    return {
        type: USER_NAME_CHANGED ,
        payload:text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED ,
        payload:text
    }
}

export const secureTextChanged = (isSecure) => {
    return {
        type: SECURE_TEXT_CHANGED ,
        payload:isSecure
    }
}



