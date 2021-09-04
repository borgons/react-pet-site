import { combineReducers } from 'redux'
import petsReducer from './petReducers'
import errorReducer from './errorReducers'

export default combineReducers({
   pet:petsReducer,
   error:errorReducer
})