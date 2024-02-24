import { alertatypes } from "../types";

const InitialState={
    alerta:{
        open:false,
        severity:'info',
        msg:''
    }
}

export default function (state=InitialState,action){
    switch(action.type){
        case alertatypes.MOSTRAR_ALERTA:
            return {
                ...state,
                alerta:{
                    ...state.alerta,
                    open:true,
                    severity:action.payload.severity,
                    msg:action.payload.msg
                }
            }
        case alertatypes.CERRAR_ALERTA:
            return{
                ...state,
                alerta:{
                    ...state.alerta,
                    open:false,
                    severity:'info',
                    msg:''
                }
            }
        default:
            return state
        }
}