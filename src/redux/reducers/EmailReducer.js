import {emailTypes} from '../types'

const InitialState={
    isLoading:{
        sendContactEmail:false,
    },
    status:{
        sendContactEmail:-1
    }
}

export default function (state=InitialState,action){
    switch(action.type){
        case emailTypes.SEND_CONTACT_EMAIL:
            return {
                ...state,
                isLoading:{
                    ...state.isLoading,
                    sendContactEmail:false
                },
                status:{
                    ...state.status,
                    sendContactEmail:201
                }
            }
        case emailTypes.SEND_CONTACT_EMAIL_STATUS:
            return{
                ...state,
                status:{
                    ...state.status,
                    sendContactEmail:action.payload.status
                },
                isLoading:{
                    ...state.isLoading,
                    sendContactEmail:action.payload.loading
                }
            }
        default:
            return {...state}
        }
}