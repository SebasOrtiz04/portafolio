import {MOSTRAR_ALERTA} from '../types'

export function AlertaAction(alerta){
    return dispatch=>{
        dispatch(crearAlerta(alerta))
    }
}

const crearAlerta=(alerta)=>({
    type:MOSTRAR_ALERTA,
    payload:alerta
})