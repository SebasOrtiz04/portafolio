import { menuTypes } from "../types";

export const  OpenMenu = () =>{
    return dispatch =>{
        dispatch({type:menuTypes.OPEN_MENU})
    }

}

export const  CloseMenu = () =>{
    return dispatch =>{
        dispatch({type:menuTypes.CLOSE_MENU})
    }
}