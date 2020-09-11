import { createStore } from "redux";
import rootReducer from './reducers'
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {
    constants
} from '../consts';

const logger = createLogger({
    predicate: (getState, action) => action.type === constants.signUser,
    });

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));
