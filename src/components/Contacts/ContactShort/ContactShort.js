import React from 'react';
import './ContactShort.css';

const ContactShort = (props) => {
    const contact = props.contact;
    return (
        <div className="ContactShort d-flex border border-secondary">
            <img className="img-thumbnail" src={contact.image} alt={contact.name} />
            <h2 className="align-self-center">{contact.name}</h2>
        </div>
    )
};

export default ContactShort;