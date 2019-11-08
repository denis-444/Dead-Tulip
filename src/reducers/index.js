import {combineReducers} from "redux";
import ContactsReducers from "./Contacts.js";

const allReducers = combineReducers ({
    Contacts: ContactsReducers
});

export default allReducers;