import { combineReducers } from "redux";
import AlertReducer from "./AlertReducer";
import MenuReducer from "./MenuReducer";

export default combineReducers({
    alerta:AlertReducer,
    menu:MenuReducer
})