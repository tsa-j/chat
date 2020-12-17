import {combineReducers} from 'redux'
//import chatReducer from './chat'
//import inputReducer from './input'
import usersReducer from './message'

export default combineReducers({
    // chat:   chatReducer,
    users: usersReducer
})
