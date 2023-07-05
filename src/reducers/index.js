import taskReducer from './taskReducers.js'

import {combineReducers} from "redux";

const rootReducer = combineReducers({
    tasks: taskReducer
})

export default rootReducer;