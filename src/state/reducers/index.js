import dataReducer  from '../reducers/dataReducer';
import widgetReducer  from '../reducers/widgetReducer';
import  {combineReducers}  from 'redux'


export default combineReducers({
    dataReducer,
    widgetReducer
  })