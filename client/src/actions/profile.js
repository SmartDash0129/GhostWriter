import api from '../utils/api';
import { setAlert } from './alert';

export const modifyProfile = (formData) => async (dispatch) => {
    try {
        // const res = await api.put('/users', formData);
        await api.put('/users', formData);
  
        dispatch(setAlert("Your profile was updated successfully!", 'success'));
    } catch (err) {
        const errors = err.response.data.errors;
  
        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
    }
};