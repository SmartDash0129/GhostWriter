import {
    QA_ADD,
    QA_CLEAN
  } from '../actions/types';
  
  const initialState = {
    QA: []
  };
  
  function dashboardReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case QA_ADD:
        return {
          ...state,
          QA: [...state.QA, payload]
        };
      case QA_CLEAN:
        return {
          ...state,
          QA: []
        };
      default:
        return state;
    }
  }
  
  export default dashboardReducer;
  