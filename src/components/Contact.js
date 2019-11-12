import React from "react";
import Contactlist from "../conteiners/Contacts-list";



class Contact extends React.Component {
     render() {
        return (
            <div className="contact">
                <h1>Контакты:</h1>
                <h3><Contactlist/></h3>
                <hr/>
            </div>
        );
    }
 }

export default Contact;