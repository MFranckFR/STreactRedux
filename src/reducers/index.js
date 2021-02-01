import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import isLoggedReducer from './isLoggedReducer';

const reducers = combineReducers({ counterReducer, isLoggedReducer });

export default reducers;