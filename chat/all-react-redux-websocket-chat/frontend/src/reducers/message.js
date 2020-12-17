import actions from '../actions'

const initialState = []

export default function reducer(state = initialState, action) {
    console.log("reducer messages: action: "+ {action})
    switch (action.type) {
        case actions.INS_MESSAGE:
            console.log("INS_MESSAGE: ")
            return [...state, {
                name: action.name,
                message: action.message,
                values:action.values
            }]

        case actions.DEL_MESSAGE:
            console.log("DEL_MESSAGE: ")
            return state.filter(el => el.message !== action.message)
         default:
             console.log("reducer messages: default: ")
    }
    return state
}
