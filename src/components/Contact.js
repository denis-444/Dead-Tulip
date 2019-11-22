import React from "react";
import Contactlist from "../conteiners/Contacts-list";
import Content from "../conteiners/content";



class Contact extends React.Component {
     render() {
        return (
            <div className="contact">
                <h1>Контакты:</h1>
                <div><Contactlist/></div>
                <Content/>
            </div>
        );
    }
 }

export default Contact;