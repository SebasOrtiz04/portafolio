import { combineReducers } from "redux";
import AlertReducer from "./AlertReducer";
import EmailReducer from "./EmailReducer";
import MenuReducer from "./MenuReducer";
import FullImageReducer from "./FullImageReducer";

export default combineReducers({
    alerta:AlertReducer,
    email:EmailReducer,
    menu:MenuReducer,
    fullImage:FullImageReducer,
})