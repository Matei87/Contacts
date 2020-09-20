import {
    ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, CLEAR_CURRENT,
    FILTER_CONTACTS, SET_CURRENT, CLEAR_FILTER
} from './types';

//Create the Reducer or the Actions or the ContactReducer
export const ContactReducer = (state, action) => {
    //console.log(state, action)
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact)
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        case FILTER_CONTACTS:
            return {
                ...state,
                filtered: state.contacts.filter(contact => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return contact.name.match(regex);
                })
            };
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            };
        default:
            return state;
    }
}