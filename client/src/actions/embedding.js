import api from '../utils/api';
import { setAlert } from './alert';

import { QA_ADD, QA_CLEAN, OPENAI_WAITING } from './types';

export const addRecord = (formData) => async (dispatch) => {
    try {
        dispatch({type: OPENAI_WAITING, payload: true});
        const res = await api.post('/embedding', formData);
        dispatch({type: OPENAI_WAITING, payload: false});
        
        
    } catch (err) {
        const errors = err.response.data.errors;
  
        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
    }
};