import React, {Component} from 'react';
import './AddContact.css';
import {connect} from "react-redux";
import {addContact, editContact, setCurrentContact} from "../../store/actions/actions";

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        number: '',
        image: '',
    };

    componentDidMount () {
        if (this.props.currentContact) {
            this.setState(this.props.currentContact);
        }
    }

    inputChangeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleBackClick = (e) => {
       e.preventDefault();
       this.props.history.push('/');
       this.props.onSetCurrentContact();
    };

    handleEditClick = (e) => {
       e.preventDefault();
       if (this.props.currentContact) {
           this.props.onEditContact(this.props.currentContact.id, this.state);
       } else {
           this.props.onAddContact(this.state);
       }
        this.props.history.push('/');
    };

    render () {
        return (
            <div className="AddContact">
                <h1 className="mt-2">Add/Edit Contact</h1>
                <form>
                    <div className="input-group mb-3 flex-column">
                        <input name="name" type="text" className="form-control w-100 mb-2" placeholder="Name"
                               onChange={this.inputChangeHandler} value={this.state.name} />
                        <input name="email" type="email" className="form-control w-100 mb-2" placeholder="Email"
                               onChange={this.inputChangeHandler} value={this.state.email} />
                        <input name="number" type="tel" className="form-control w-100 mb-2" placeholder="Phone number"
                               onChange={this.inputChangeHandler} value={this.state.number} />
                        <input name="image" type="url" className="form-control w-100 mb-2" placeholder="Image URL"
                               onChange={this.inputChangeHandler} value={this.state.image} />
                    </div>
                </form>
                <h4>Image preview:</h4>
                <img className="img-contact border border-dark" src={this.state.image} alt={this.state.name} />
                <div className="d-flex">
                    <button type="button" className="btn btn-secondary mr-3" onClick={this.handleEditClick}>Save</button>
                    <button type="button" className="btn btn-secondary" onClick={this.handleBackClick}>Back to contacts</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentContact: state.currentContact
    }
};

const mapDispatchToProps = dispatch => {
   return {
       onSetCurrentContact: () => dispatch(setCurrentContact()),
       onEditContact: (id, obj) => dispatch(editContact(id, obj)),
       onAddContact: (obj) => dispatch(addContact(obj))
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);