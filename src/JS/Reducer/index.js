import {combineReducers} from "redux";
import TaskReducer from "./Reducer"

const rootReducer =combineReducers({task: TaskReducer})

export default rootReducer