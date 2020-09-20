import React, { useReducer } from 'react';
import { ContactContext } from './ContactContext';
import { ContactReducer } from './ContactReducer';
import {
    ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, CLEAR_CURRENT,
    FILTER_CONTACTS, SET_CURRENT, CLEAR_FILTER
} from './types';


//Create Provider Component aka ContactState
const ContactState = (props) => {
    //get parsed contacts from local storage
    const initialContacts = JSON.parse(localStorage.getItem('contacts'));
    const initialState = {
        contacts: initialContacts || [],
        filtered: null,
        current: null
    }
    const [state, dispatch] = useReducer(ContactReducer, initialState);

    //add a contact Action
    const addContact = (contact) => {
        dispatch({ type: ADD_CONTACT, payload: contact })
    }
    //delete a contact Action
    const deleteContact = (id) => {
        dispatch({ type: DELETE_CONTACT, payload: id })
    }
    //update a contact Action
    const updateContact = (contact) => {
        dispatch({ type: UPDATE_CONTACT, payload: contact })
    }
    //set current contact Action
    const setCurrentContact = (contact) => {
        dispatch({ type: SET_CURRENT, payload: contact })
    }
    //clear current Contact after edit Action
    const clearCurrentContact = () => {
        dispatch({ type: CLEAR_CURRENT })
    }
    //filter contacts by name Action
    const filterContacts = (text) => {
        dispatch({ type: FILTER_CONTACTS, payload: text })
    }
    //clear filter / set to null filter Action
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })
    }
    return (
        <ContactContext.Provider
            value={
                {
                    contacts: state.contacts,
                    current: state.current,
                    filtered: state.filtered,
                    addContact,
                    deleteContact,
                    setCurrentContact,
                    updateContact,
                    clearCurrentContact,
                    filterContacts,
                    clearFilter
                }
            }
        >
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;