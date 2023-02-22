import api from '../utils/api';
import { setAlert } from './alert';

export const sendMessage = (formData) => async (dispatch) => {
    try {
        const res = await api.post('/contact', formData);
  
        dispatch(setAlert("Your message sent successfully!", 'success'));
    } catch (err) {
        const errors = err.response.data.errors;
  
        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
    }
};