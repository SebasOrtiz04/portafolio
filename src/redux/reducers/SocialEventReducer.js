import { socialEventTypes } from "../types"

 const InitialState = {
    allSocialEvents:[],
    isLoading:{
        getAll:false
    },
    status:{
        getAll:-1
    }
 }

 export default function(state=InitialState,action){
    switch(action.type){
        case socialEventTypes.GET_ALL_SOCIALEVENTS:
            return{
                ...state,
                allSocialEvents:action.payload,
                isLoading:{
                    ...state.isLoading,
                    getAll:false
                },
                status:{
                    ...state.status,
                    getAll:200
                }
            }
        case socialEventTypes.GET_ALL_SOCIALEVENTS_STATUS:
            return{
                ...state,
                isLoading:{
                    ...state.isLoading,
                    getAll:action.payload.loading
                },
                status:{
                    ...state.status,
                    getAll:action.payload.status
                }
            }
        default:
            return state
    }
 }