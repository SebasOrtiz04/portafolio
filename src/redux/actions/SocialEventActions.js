import api from "@/services"
import { socialEventTypes } from "../types"


export const SetGetAllSocialEventsStatus = (status = -1, loading = false) => ({
    type: socialEventTypes.GET_ALL_SOCIALEVENTS_STATUS,
    payload: { status, loading },
  });
  
  export const GetAllSocialEvents = () => async dispatch => {
    dispatch(SetGetAllSocialEventsStatus(-1, true));
    try {
      const response = await api.get('/socialevents');
      const {data,status} = response
      console.log(data);
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