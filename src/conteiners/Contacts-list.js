import React, {Component} from "react";
import {bindActionCreators } from "redux";
import {connect} from "react-redux";


class Contactlist extends React.Component {
    showlist () {
        return this.props.Contacts.map ((contact) =>{
            return (
            <p key={contact.id}>{contact.name}</p>
            )
        })
    }
    
    render() {
        return(
            <div>
                {this.showlist()}
            </div>
        )
    }
}


function mapStateToProps (state) {
    return {
        Contacts: state.Contacts
    }
}

export default connect(mapStateToProps)(Contactlist);