import api from '../utils/api';
import { setAlert } from './alert';
import { QA_ADD, QA_CLEAN, OPENAI_WAITING } from './types';

export const getAnswer = (question) => async (dispatch) => {
    try {
        dispatch({type: OPENAI_WAITING, payload: true});
        const res = await api.get(`/dashboard/${question}`);
        dispatch({type: OPENAI_WAITING, payload: false});
        const answer = res.data;
        const payload = [question, answer];
        dispatch({type: QA_ADD, payload});
        dispatch(setAlert("Written by AI successfully!", 'success'));
    } catch (err) {
        const errors = err.response.data.errors;
  
        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
    }
};

export const cleanHistory = () => async (dispatch) => {
    try {
        const payload = [];
        dispatch({type: QA_CLEAN, payload});
        dispatch(setAlert("Your history cleaned successfully!", 'success'));
    } catch (err) {
        const errors = err.response.data.errors;
  
        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }
    }
}