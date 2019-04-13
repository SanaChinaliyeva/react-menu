import axios from '../../axios-contacts';
import {FETCH_CONTACTS_SUCCESS, SET_CURRENT_CONTACT} from "./action-types";

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
            dispatch(setCurrentContact());
            dispatch(fetchContacts());
        });
    }
};


export const fetchContactsSuccess = (contacts) => {
    return {type: FETCH_CONTACTS_SUCCESS, value: contacts}
};

export const findCurrentIndex = contactId => {
   return (dispatch, getState) => {
       const contacts = getState().contacts;
       let index = contacts.findIndex(contact => contact.id ===contactId);
       dispatch(setCurrentContact(index));
   }
};

export const setCurrentContact = contactId => {
    return {type: SET_CURRENT_CONTACT, value: contactId || ""}
};

export const editContact = (id, newContact) => {
    return dispatch => {
        axios.put('/contacts/'+id+'.json', newContact).then(() => {
            dispatch(setCurrentContact());
            dispatch(fetchContacts());
        });
    }
};

export const addContact = newContact => {
    return (dispatch)=> {
        axios.post('/contacts.json', newContact).then(() => {
            dispatch(fetchContacts());
        });
    }
};