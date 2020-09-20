import React, { useContext } from 'react';
import { ContactContext } from '../../context/ContactContext';
import { HiMailOpen, HiPhone } from 'react-icons/hi';
import './Contact.css';
import PropTypes from 'prop-types';

const Contact = ({ contact }) => {
    const { deleteContact, setCurrentContact } = useContext(ContactContext);
    const { id, name, email, phone, type } = contact;

    const onDelete = (id) => {
        deleteContact(id);
    }

    return (
        <div className="card">
            < div className="card-header">
                <h4>{name}</h4>
                <span className={type === 'personal' ? 'badge badge-primary' : 'badge badge-success'}>{type}</span>
            </div >
            <div className="card-body">
                <ul>
                    <li><HiMailOpen /> <span>{email}</span></li>
                    <li><HiPhone /> <span>{phone}</span></li>
                </ul>
            </div>
            <div className="card-footer">
                <button className="btn btn-primary" onClick={() => setCurrentContact(contact)}>Edit</button>
                <button className="btn btn-secondary" onClick={onDelete.bind(this, id)}>Delete</button>
            </div>
        </div>
    )
}
Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;