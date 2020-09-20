import React, { useState, useContext, useEffect } from 'react';
import './AddContact.css';
import { ContactContext } from '../../context/ContactContext';
import { v4 as uuid } from 'uuid';

const AddContact = () => {
    let contactContext = useContext(ContactContext);
    const { addContact, updateContact, contacts, current, clearCurrentContact } = useContext(ContactContext);
    const [contact, setContact] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    })
    const { name, email, phone, type } = contact;

    useEffect(() => {
        if (current !== null) {
            setContact(current);
        } else {
            setContact({
                id: '',
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            })
        }
    }, [contactContext, current])

    const onChangeActions = (e) => {
        setContact({ ...contact, id: uuid(), [e.target.name]: e.target.value })
    }

    const formOnSubmit = (e) => {
        e.preventDefault();
        if (current === null) {
            addContact(contact);
        } else {
            updateContact({ ...contact, id: current.id });
            setContact(current)
        }
        clearCurrentContact();
    }
    useEffect(() => {
        //set to local storage stringified contacts from the context
        localStorage.setItem('contacts', JSON.stringify(contacts));
    })
    return (
        <form id="addcontact" onSubmit={formOnSubmit}>
            <h2>{current ? 'Edit Contact' : 'Add Contact'}</h2>
            <div className="form-group">
                <input type="text" name="name" id="name" placeholder="Name" value={name} onChange={onChangeActions} className="form-control" required />
            </div>
            <div className="form-group">
                <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={onChangeActions} className="form-control" required />
            </div>
            <div className="form-group">
                <input type="tel" name="phone" id="phone" placeholder="Phone" value={phone} onChange={onChangeActions} className="form-control" required />
            </div>
            <h5>Contact Type</h5>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="type" value="personal" id="personal" onChange={onChangeActions} checked={type === 'personal'} />
                <label className="form-check-label" htmlFor="personal">Personal</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="type" value="professional" id="professional" onChange={onChangeActions} checked={type === 'professional'} />
                <label className="form-check-label" htmlFor="professional">Professional</label>
            </div>
            <button type="submit" className="btn btn-success btn-block">{current ? 'Edit' : 'Submit'}</button>
        </form>
    )
}

export default AddContact;