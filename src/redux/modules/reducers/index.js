import { combineReducers } from 'redux';
import authReducer from './auth';
import weatherReducer from './weather';
import forecastReducer from './forecast';

const appReducer = combineReducers({
  authReducer,
  weatherReducer,
  forecastReducer
});

export { appReducer };
