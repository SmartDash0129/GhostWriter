import {
    CONTACT_CLEAR,
    CONTACT_UPDATE,
    CONTACT_DELETE,
    CONTACT_LOADED
  } from '../actions/types';
  
  const initialState = {
    contacts: [],
    clickedContact: {}
  };
  
  function contactReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case CONTACT_LOADED:
            return {
                ...state,
                contacts: [...state.contacts, payload]
            }
        case CONTACT_DELETE:
            return {
                ...state
          
            };
        case CONTACT_UPDATE:
            return {
                ...state  
        };
        case CONTACT_CLEAR:
            return {
                ...state,
                contacts: [],
                clickedContact: {}
            };
        default:
            return state;
    }
}
  
  export default contactReducer;
  