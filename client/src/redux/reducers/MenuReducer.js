import { menuTypes } from "../types";

const Initialstate ={
    open:false
}

export default function(state=Initialstate,action){
    switch(action.type){
        case menuTypes.OPEN_MENU:
            return{
                ...state,
                open:true
            }
        case menuTypes.CLOSE_MENU:
            return{
                ...state,
                open:false
            }
        default :
            return{...state}
    }
}