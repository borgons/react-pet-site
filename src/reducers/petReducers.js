import { NEW_PET, NEW_APPOINT } from '../actions/type'

const initialState = {
   pets: [],
   appoints:[]

}

export default function pet (state = initialState, action){
   switch (action.type) {
      case NEW_PET:
         return{
            ...state,
            pets: [action.payload, ...state.pets]
         }
      case NEW_APPOINT:
         return{
            ...state, 
            appoints:[action.payload, ...state.appoints]
         }

      default:
         return state;
   }
}