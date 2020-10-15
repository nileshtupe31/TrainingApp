import Axios from "axios"
import { BASE_URL, END_POINTS } from "../Constants/constants"
import { SET_QUESTIONS, SHOW_LOADING } from "./types"


export const getQuiz = (testId) => {

    const url = BASE_URL+END_POINTS.test+"?testId="+testId
    return (dispatch) => {
        dispatch({
            type:SHOW_LOADING,
            payload:true
        })
        Axios.get(url)
        .then(res => {
            dispatch({
                type:SHOW_LOADING,
                payload:false
            })
            dispatch({
                type:SET_QUESTIONS,
                payload:res.data
            })
        })
    }
}