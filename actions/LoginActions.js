import axios from "axios";
import { BASE_URL, END_POINTS } from "../Constants/constants";
import { SECURE_TEXT_CHANGED, USER_NAME_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_FAILURE, SHOW_LOADING } from "./types"

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

export const login = (userName, password) => {

    const url = BASE_URL + END_POINTS.login

    const params = new URLSearchParams()
    params.append('employeeId', userName)
    params.append('password', password)


    return (dispatch) => {
        dispatch({
            type:SHOW_LOADING,
            payload:true
        })
        axios.post(url, params)
        .then(res => {
            console.log(JSON.stringify(res));

            dispatch({
                type:SHOW_LOADING,
                payload:false
            })
    
            if (res.data.userid != null) {
                dispatch({
                    type:LOGIN_SUCCESS,
                    payload:res.data.userid
                })    
            } else {
                dispatch({
                    type:LOGIN_FAILURE,
                    payload:res.data.message
                })
            }
    
        })
        .catch(error => {
            console.log(JSON.stringify(error));
            dispatch({
                type:SHOW_LOADING,
                payload:false
            })
    
            dispatch({
                type:LOGIN_FAILURE,
                payload:"Network Error"
            })
        })    
    }
}



