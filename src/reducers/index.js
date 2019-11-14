import {combineReducers} from "redux";
import ContactReducers from "./Contact";
import ActiveContact from "./activ-contact";

const allReducers = combineReducers ({
    Contact: ContactReducers,
    active: ActiveContact
});

export default allReducers;