import axios from '../../axios-contacts';
import {DELETE_CONTACT_SUCCESS, FETCH_CONTACTS_SUCCESS, SET_CURRENT_CONTACT} from "./action-types";

export const fetchContacts = () => {
    return dispatch => {
        axios.get('/contacts.json').then((response) => {
            const contactsObj = response.data;
            return Object.keys(contactsObj).map(contactKey => {
                return {
                    id: contactKey,
                    name: contactsObj[contactKey].name,
                    number: contactsObj[contactKey].number,
                    email: contactsObj[contactKey].email,
                    image: contactsObj[contactKey].image,
                }
            });
        }).then (contacts => { dispatch(fetchContactsSuccess(contacts))});
    }
};

export const deleteContact = (e, id) => {
    return dispatch => {
        e.preventDefault();
        axios.delete('/contacts/'+id+'.json').then(() => {
            dispatch(deleteContactSuccess());
            fetchContacts();
        });
    }
};

export const deleteContactSuccess = () => {
   return {type: DELETE_CONTACT_SUCCESS};
};

export const fetchContactsSuccess = (contacts) => {
    return {type: FETCH_CONTACTS_SUCCESS, value: contacts}
};

export const setCurrentContact = contactId => {
    return {type: SET_CURRENT_CONTACT, value: contactId || ""}
};