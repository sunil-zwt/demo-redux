import {combineReducers} from "redux"
import usersReducer from "./reducer"


const rootReducer = combineReducers({
    users:usersReducer
})


export default rootReducer