import React from 'react';
import './Contact.css';

const Contact = props => {
    const contact = props.contact;
    return (
        <div className="Contact">
            <div className="d-flex">
                <img src={contact.image} alt={contact.name} className="m-2 img-contact" />
                <div className="description">
                    <h1>{contact.name}</h1>
                    <a href={`mailto:${contact.email}`}
                       className="d-block h5"><i className="fas fa-phone"/> {contact.email}</a>
                    <a data-rel="external" href={`tel:${contact.number}`}
                       className="d-block h5"><i className="fas fa-envelope"/> {contact.number}</a>
                </div>
            </div>
            <div className="d-flex justify-content-around">
                <button
                    onClick={(e) => props.editClickHandler(e, contact.id)}
                    type="button" className="btn btn-secondary"><i className="fas fa-edit"/> Edit</button>
                <button
                    onClick={props.deleteClickHanlder}
                    type="button" className="btn btn-secondary"><i className="fas fa-trash-alt"/> Delete</button>
            </div>
        </div>
    )
};

export default Contact;