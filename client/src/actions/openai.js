import { setAlert } from './alert';
import { OPENAI_WAITING } from './types';

export const setOpenAI = (data) => async (dispatch) => {
    try {
        const payload = data;
        dispatch(OPENAI_WAITING, payload);
    } catch (err) {
        const errors = err.response.data.errors;
  
        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
    }
};