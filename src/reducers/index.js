import {combineReducers} from "redux";
import ContactReducers from "../reducers/Contact";
import ActiveContact from "../reducers/activ-contact";

const allReducers = combineReducers ({
    Contacts: ContactReducers,
    active: ActiveContact
});

export default allReducers;