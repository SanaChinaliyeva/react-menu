import React, {Component} from 'react';
import './ContactsBook.css';
import Contacts from "../../components/Contacts/Contacts";
import {connect} from "react-redux";
import {fetchContacts, setCurrentContact, deleteContact} from "../../store/actions/actions";
import Modal from "../../components/UI/Modal/Modal";
import Contact from "../../components/Contacts/Contact/Contact";

class ContactsBook extends Component {
    state = {
        isModalShown: false,
        contactId: ""
    };

    componentDidMount () {
        this.props.onFetchContacts();
    }

    showContact = (contactId) => {
        let newState = {isModalShown: true,  modalClass: 'open'};
        this.setState(newState, () => {
            this.props.onFetchContactById(contactId);
        });
    };

    showCancelHandler = () => {
        this.setState({isModalShown: false, modalClass: ''});
    };

    deleteContact = (e, id) => {
        this.showCancelHandler();
        this.props.onDeleteContact(e, id);
        this.props.onFetchContacts();
    };

    onEditContact = (e) => {
        e.preventDefault();
        this.showCancelHandler();
       this.props.history.push('/addcontact');
    };
    render () {
        return (
            <div className="ContactsBook">
                <Modal show={this.state.isModalShown} closed={this.showCancelHandler}>
                    <Contact contact={this.props.currentContact}
                             editClickHandler={this.onEditContact}
                             deleteClickHanlder={this.deleteContact}/>
                </Modal>
                <Contacts contacts={this.props.contacts} clickHandler={this.showContact} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts,
        currentContact: state.currentContact
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchContacts: () => dispatch(fetchContacts()),
        onFetchContactById: (contactId) => dispatch(setCurrentContact(contactId)),
        onDeleteContact: (e, id) => dispatch(deleteContact(e, id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsBook);