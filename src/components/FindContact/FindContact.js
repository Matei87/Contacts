import React, { useContext, useEffect, useRef } from 'react';
import './FindContact.css';
import { ContactContext } from '../../context/ContactContext';


const FindContact = () => {
    const { filterContacts, filtered, clearFilter } = useContext(ContactContext);
    const text = useRef('');

    useEffect(() => {
        if (filtered === null) {
            text.current.value = '';
        }
    });
    const filter = (e) => {
        if (text.current.value !== '') {
            filterContacts(e.target.value);
        } else {
            clearFilter();
        }
    }

    return (
        <form id="findcontact">
            <div className="form-group">
                <input
                    ref={text}
                    type="text"
                    className="form-control"
                    placeholder="Find contact"
                    onChange={filter}
                />
            </div>
        </form>
    )
}

export default FindContact;


