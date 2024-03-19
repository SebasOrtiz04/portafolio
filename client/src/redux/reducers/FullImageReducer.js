import {fullImageTypes} from '../types'

const InitialState = {
    open:false,
    list:[],
    selected:0
}

export default function(state=InitialState,action){
    switch(action.type){
        case fullImageTypes.OPEN_IMAGE:
            return{
                ...state,
                open:true,
                selected:action.payload.selected,
                list:action.payload.list 
            }
        case fullImageTypes.CLOSE_IMAGE:
            return{
                ...state,
                open:false,
                selected:0,
                list:[]
            }
        case fullImageTypes.SET_SELECTED_IMAGE:
            return{
                ...state,
                selected:action.payload
            }
        default :
            return{...state}
    }
}