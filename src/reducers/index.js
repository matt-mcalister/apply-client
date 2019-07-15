import { combineReducers } from 'redux';
import authReducer from './authReducer'
import organizationsReducer from './organizationsReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  organizations: organizationsReducer
})

export default rootReducer;
