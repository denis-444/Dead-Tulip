import {combineReducers} from "redux";
import ContactReducers from "./Contact";

const allReducers = combineReducers ({
    Contact: ContactReducers
});

export default allReducers;