import React, {Component} from 'react';
import './ContactsBook.css';
import Contacts from "../../components/Contacts/Contacts";
import {connect} from "react-redux";
import {fetchContacts} from "../../store/actions/actions";

class ContactsBook extends Component {
    componentDidMount () {
        this.props.onFetchContacts();
    }

    render () {
        return (
            <div className="ContactsBook">
                <Contacts contacts={this.props.contacts} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchContacts: () => dispatch(fetchContacts())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsBook);