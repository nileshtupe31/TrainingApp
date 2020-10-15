import { SET_QUESTIONS, NEXT_QUESTION, PREVIOUS_QUESION } from "../actions/types"


const INITIAL_STATE = {
    questions:[],
    index:0,
    question:null,
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case SET_QUESTIONS:
            return {...state, questions:action.payload, index:0, question:action.payload[0]}

        case NEXT_QUESTION: {
            var index = state.index + 1
            const question = state.questions[index]
            return {...state, index:index, question:question }

        }
        case PREVIOUS_QUESION: {
            var index = state.index - 1
            const question = state.questions[index]
            return {...state, index:index, question:question }
        }

        default:
            return state
    }
}