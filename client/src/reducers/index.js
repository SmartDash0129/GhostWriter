import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import dashboard from './dashboard';
import openai from './openai';

export default combineReducers({
  alert,
  auth,
  dashboard,
  openai
});
