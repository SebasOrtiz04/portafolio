import { fullImageTypes } from "../types";

export const OpenImage = ({list,selected = 0}) =>{

    if(!list) return;

    return dispatch =>{
        dispatch({
            type:fullImageTypes.OPEN_IMAGE,
            payload:{
                list:list,
                selected:selected
            }})
    }
}

export const CloseImage = () =>{
    return dispatch =>{
        dispatch({type:fullImageTypes.CLOSE_IMAGE})
    }
}

export const SelectImage = index =>{
    return dispatch =>{
        dispatch({type:fullImageTypes.SET_SELECTED_IMAGE,payload:index})
    }
}