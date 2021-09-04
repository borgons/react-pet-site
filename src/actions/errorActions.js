import { GET_STATUS, CLEAR_STATUS } from './type'

//RETURN ERRORS
export const returnErrors = (msg = null) => {
   return {
      type: GET_STATUS,
      payload:{msg}
   }
}

//CLEAR ERRORS
export const clearErrors =  () => {
   return {
      type: CLEAR_STATUS
   }
}