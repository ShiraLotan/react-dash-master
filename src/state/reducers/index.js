import dataReducer  from '../reducers/dataReducer';
import widgetReducer  from '../reducers/widgetReducer';
import signInReducer from './signReducer'
import  {combineReducers}  from 'redux'


export default combineReducers({
    dataReducer,
    widgetReducer,
    signInReducer
  })