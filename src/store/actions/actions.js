import axios from '../../axios-contacts';
import {FETCH_CONTACTS_SUCCESS} from "./action-types";

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
        }).then (contacts => { dispatch(fetchMenuSuccess(contacts))});
    }
};


export const fetchMenuSuccess = (contacts) => {
    return {type: FETCH_CONTACTS_SUCCESS, value: contacts}
};
