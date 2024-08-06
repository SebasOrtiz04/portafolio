import { socialEventTypes } from "../types"

 const InitialState = {
    homeSocialEvents:[],
    allSocialEvents:[],
    socialEventById:{},
    isLoading:{
        getAll:false,
        getHome:false,
        getById:false,
    },
    status:{
        getAll:-1,
        getHome:false,
        getById:false,
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
        case socialEventTypes.GET_HOME_SOCIALEVENTS:
            return{
                ...state,
                homeSocialEvents: action.payload,
                isLoading :{
                    ...state.isLoading,
                    getHome:false
                },
                status:{
                    ...state.status,
                    getHome:200
                }
            }
        case socialEventTypes.GET_HOME_SOCIALEVENTS_STATUS:
            return{
                ...state,
                isLoading :{
                    ...state.isLoading,
                    getHome:action.payload.loading
                },
                status:{
                    ...state.status,
                    getHome:action.payload.status
                }
            }
        case socialEventTypes.GET_SOCIALEVENT_BY_ID:
            return{
                ...state,
                socialEventById: action.payload,
                isLoading :{
                    ...state.isLoading,
                    getById:false
                },
                status:{
                    ...state.status,
                    getById:200
                }
            }
        case socialEventTypes.GET_SOCIALEVENT_BY_ID_STATUS:
            return{
                ...state,
                isLoading :{
                    ...state.isLoading,
                    getById:action.payload.loading
                },
                status:{
                    ...state.status,
                    getById:action.payload.status
                }
            }
        default:
            return state
    }
 }