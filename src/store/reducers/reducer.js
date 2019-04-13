import {FETCH_CONTACTS_SUCCESS} from "../actions/action-types";

const initialState = {
   contacts: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACTS_SUCCESS:
            return {...state, contacts: action.value};
        default:
            return state;
    }
};

export default reducer;