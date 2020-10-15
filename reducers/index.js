import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import AppStateReducer from "./AppStateReducer";
import QuizReducer from "./QuizReducer";

export default combineReducers({
    login:LoginReducer,
    appState:AppStateReducer,
    quiz:QuizReducer
})