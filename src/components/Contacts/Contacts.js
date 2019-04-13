import React from 'react';
import ContactShort from "./ContactShort/ContactShort";

const Contacts = props => {
    const contacts = props.contacts;
    return contacts.map(contact => {
        return (
            <ContactShort key={contact.id} contact={contact} />
        )
    })
};

export default Contacts;