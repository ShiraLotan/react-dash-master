import { createStore } from "redux";
import rootReducer from './reducers'
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
