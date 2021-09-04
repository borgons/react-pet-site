import { GET_STATUS, CLEAR_STATUS} from '../actions/type';

const initialState = {
   msg:{}
}

export default function err(state = initialState, action){
   switch (action.type) {
      case GET_STATUS:
         return {
            msg: action.payload.errors
         }
         
      case CLEAR_STATUS:
         return {
            msg:{}
         }
   
      default:
         return state;
   }
}