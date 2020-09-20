import React, { useContext } from 'react';
import { ContactContext } from '../../context/ContactContext';
import Contact from '../Contact/Contact';

const Contacts = () => {
    const { contacts, filtered } = useContext(ContactContext);

    return (
        <>
            {
                filtered !== null ? <>{filtered.length !== 0 ? filtered.map(contact =>
                    <Contact key={contact.id} contact={contact} />) : <><h4 style={{ margin: '0', fontSize: '1.75rem' }}>No such contact</h4></>}</> :
                    contacts.length > 0 && contacts !== null ? <>{
                        contacts.map(contact => {
                            return <Contact key={contact.id} contact={contact} />
                        })} </> : <h4 style={{ margin: '0', fontSize: '1.75rem' }}>Please add a contact</h4>
            }
        </>
    )
}

export default Contacts;