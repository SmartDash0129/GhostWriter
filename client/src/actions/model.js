import api from '../utils/api';
import { setAlert } from './alert';

export const testFunc = () => async (dispatch) => {
    try {
        const res = await api.get('/model');
        console.log(res.data);
        
    } catch (err) {
        const errors = err.response.data.errors;
  
        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
    }
};