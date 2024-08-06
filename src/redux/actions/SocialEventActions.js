import api from "@/services"
import { socialEventTypes } from "../types"


export const SetGetAllSocialEventsStatus = (status = -1, loading = false) => ({
    type: socialEventTypes.GET_ALL_SOCIALEVENTS_STATUS,
    payload: { status, loading },
});

export const SetGetHomeSocialEventsStatus = (status = -1, loading = false) => ({
    type: socialEventTypes.GET_HOME_SOCIALEVENTS_STATUS,
    payload: { status, loading },
});

export const SetGetSocialEventByIdStatus = (status = -1, loading = false) => ({
    type: socialEventTypes.GET_SOCIALEVENT_BY_ID_STATUS,
    payload: { status, loading },
});
  
  export const GetAllSocialEvents = () => async dispatch => {
    dispatch(SetGetAllSocialEventsStatus(-1, true));
    try {
      const response = await api.get('/socialevents');
      const {data,status} = response
      // Puedes despachar una acción con los datos recibidos si es necesario

      if(status !== 200) return
      dispatch({
        type: socialEventTypes.GET_ALL_SOCIALEVENTS,
        payload:data,
      });
    } catch (error) {
      console.error(error);
      dispatch(SetGetAllSocialEventsStatus(500, false));
    }
  };
  
  export const GetHomeSocialEvents = () => async dispatch => {
    dispatch(SetGetHomeSocialEventsStatus(-1, true));
    try {
      const response = await api.get('/socialevents/home');
      const {data,status} = response
      // Puedes despachar una acción con los datos recibidos si es necesario

      if(status !== 200) return
      dispatch({
        type: socialEventTypes.GET_HOME_SOCIALEVENTS,
        payload:data,
      });
    } catch (error) {
      console.error(error);
      dispatch(SetGetHomeSocialEventsStatus(500, false));
    }
  };
  
  export const GetSocialEventsById = ({
    categoryId,
    serviceId
  }) => async dispatch => {
    dispatch(SetGetSocialEventByIdStatus(-1, true));
    try {
      const response = await api.get(`/categories/${categoryId}/eventos/${serviceId}`);
      console.log(response)
      const {data,status} = response
      // Puedes despachar una acción con los datos recibidos si es necesario

      if(status !== 200) return
      dispatch({
        type: socialEventTypes.GET_SOCIALEVENT_BY_ID,
        payload:data,
      });
    } catch (error) {
      console.error(error);
      dispatch(SetGetSocialEventByIdStatus(500, false));
    }
  };