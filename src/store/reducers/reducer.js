import {FETCH_CONTACTS_SUCCESS, SET_CURRENT_CONTACT} from "../actions/action-types";

const initialState = {
   contacts: [],
    currentContact: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACTS_SUCCESS:
            return {...state, contacts: action.value};
        case SET_CURRENT_CONTACT:
            return {...state, currentContact: state.contacts[action.value] || ""};
        default:
            return state;
    }
};

export default reducer;