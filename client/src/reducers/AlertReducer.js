import { MOSTRAR_ALERTA } from "../types";

const InitialState={
    alerta:null
}

export default function (state=InitialState,action){
    switch(action.type){
        case MOSTRAR_ALERTA:
            return {alerta:action.payload}
        default:
            return state
        }
}