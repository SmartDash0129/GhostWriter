import {
    CONTACT_CLEAR,
    CONTACT_UPDATE,
    CONTACT_DELETE,
    CONTACT_LOADED,
    CONTACT_ACTIVE_SET,
    CONTACT_ACTIVE_DEL
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
                contacts: payload
            }
        case CONTACT_DELETE:
            return {
                ...state,
                contacts: state.contacts.filter(item => item._id !== payload._id),
                clickedContact: {}
          
            };
        case CONTACT_UPDATE:
            return {
                ...state,
                contacts: [...state.contacts.slice(0, payload.index), payload.updatedContact, ...state.contacts.slice(payload.index+1, state.contacts.length)]
        };
        case CONTACT_CLEAR:
            return {
                ...state,
                contacts: [],
                clickedContact: {}
            };
        case CONTACT_ACTIVE_SET:
            return {
                ...state,
                clickedContact: payload
            }
        default:
            return state;
    }
}
  
  export default contactReducer;
  