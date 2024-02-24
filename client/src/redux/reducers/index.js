import { combineReducers } from "redux";
import AlertReducer from "./AlertReducer";
import EmailReducer from "./EmailReducer";

export default combineReducers({
    alerta:AlertReducer,
    email:EmailReducer
})