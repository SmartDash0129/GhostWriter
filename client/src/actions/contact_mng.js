import api from '../utils/api';
import { setAlert } from './alert';

import { CONTACT_CLEAR, CONTACT_DELETE, CONTACT_LOADED } from './types';

export const loadContact = () => async (dispatch) => {
    try {
        const res = await api.get('/contact_admin');
        // console.log(res.data);
        const payload = res.data;
        console.log(payload);
        dispatch(CONTACT_LOADED, payload);
        
        dispatch(setAlert("All contact messages were loaded successfully!", 'success'));
    } catch (err) {
        const errors = err.response.data.errors;
  
        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
    }
};

export const deleteContact = (formData) => async (dispatch) => {
    try {
        // const res = await api.post('/contact', formData);
        await api.post('/contact', formData);
  
        dispatch(setAlert("This contact message was deleted successfully!", 'success'));
    } catch (err) {
        const errors = err.response.data.errors;
  
        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
    }
};

export const updateContact = (formData) => async (dispatch) => {
    try {
        dispatch(setAlert("This contact message was dealt successfully!", "success"));
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
    }
}

export const clearContact = () => async (dispatch) => {
    try {
        dispatch(setAlert("This contact messages were cleared successfully!", "success"));
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
    }
}