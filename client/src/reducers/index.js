import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import dashboard from './dashboard';
import openai from './openai';
import contact from './contact';

export default combineReducers({
  alert,
  auth,
  dashboard,
  openai,
  contact
});
