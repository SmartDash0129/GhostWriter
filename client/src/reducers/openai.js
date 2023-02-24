import {
  OPENAI_WAITING
} from '../actions/types';

const initialState = {
  waiting: false
};

function openaiReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case OPENAI_WAITING:
      return {
        ...state,
        waiting: payload
      };
    default:
      return state;
  }
}

export default openaiReducer;
