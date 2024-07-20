import {alertatypes} from '../types'

export function MostrarAlerta({msg,severity}){
    return dispatch=>{
        dispatch({
            type:alertatypes.MOSTRAR_ALERTA,
            payload:{msg:msg,severity:severity}
        })
    }
}

export function CerrarAlerta(){
    return dispatch=>{
        dispatch({type:alertatypes.CERRAR_ALERTA})
    }
}

