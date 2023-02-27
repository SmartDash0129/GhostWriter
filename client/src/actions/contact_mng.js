import api from '../utils/api';
import { setAlert } from './alert';

import { CONTACT_CLEAR, CONTACT_DELETE, CONTACT_LOADED, CONTACT_ACTIVE_SET, CONTACT_ACTIVE_DEL, CONTACT_UPDATE } from './types';

export const loadContact = () => async (dispatch) => {
    try {
        const res = await api.get('/contact_admin');
        const payload = res.data;
        dispatch({type: CONTACT_LOADED, payload});
        
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
        // await api.post('/contact', formData);

        const payload = formData;

        await api.delete(`/contact_admin/${formData._id}`);

        dispatch({type: CONTACT_DELETE, payload});

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

export const setActiveContact = (data) => async (dispatch) => {
    try {
        const payload = data;
        dispatch({type: CONTACT_ACTIVE_SET, payload});
        dispatch(setAlert("Set active contact successfully!", "success"));
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
    }
}

export const delActiveContact = () => async (dispatch) => {
    try {
        dispatch(setAlert("Delete active contact successfully!", "success"));
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
    }
}

export const replyContactMessage = (formData) => async (dispatch) => {
    try {
        
        const payload = formData;
        const id = formData.id;
        const res = await api.put('/contact_admin', {id});

        // console.log(formData);

        dispatch({type: CONTACT_UPDATE, payload});

        dispatch(setAlert("Replying message sent successfully!", "success"));
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
    }
}

