import axios from 'axios'

import { NEW_PET, NEW_APPOINT, GET_STATUS } from './type'



export const petRegister = (petData, setErrorHandler, setSuccessHandler) => async dispatch => {
   const config = {
      headers:{
         "Content-Type": "application/json",
      }
   };

   try {
      const res = 
      await axios.post("http://localhost:3000/api/petRegister", petData, config );
      dispatch({
         type: NEW_PET,
         payload: res.data
      });
      setSuccessHandler({
         hasSuccess: true,
         msg: 'Your are now already registered......'
      });

   } catch (err) {

      if(err.response.status === 422){
         dispatch({
            type: GET_STATUS,
            payload: err.response.data.errors
         });
         setErrorHandler({
            hasError: true,
            msg: err.response.data.errors
         });
      }

   }

}


export const newAppoint = (appData, setErrorHandler, setSuccessHandler) => async dispatch => {
   const config = {
      headers:{
         "Content-Type": "application/json"
      }
   };

   try {
      const res = await axios.post("http://localhost:3000/api/newAppoint", appData, config );
      
      dispatch({
         type: NEW_APPOINT,
         payload: res.data
      });
      setSuccessHandler({
         hasSuccess: true,
         msg: 'Your are now already registered......'
      });

   } catch (err) {

      if(err.response.status === 422){
         dispatch({
            type: GET_STATUS,
            payload: err.response.data.errors
         });
         setErrorHandler({
            hasError: true,
            msg: err.response.data.errors
         });
      }
      
   }

}