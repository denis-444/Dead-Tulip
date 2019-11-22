import React, {Component} from "react";
import {bindActionCreators } from "redux";
import {connect} from "react-redux";
import {select} from "../actions/index";


class Contactlist extends Component {
    showlist () {
        return this.props.Contacts.map ((contact) =>{
            return (
            <p onClick={() => this.props.select (contact)}
             key={contact.id}>{contact.name}</p>
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

function matcDispatchToProps (dispatch) {
    return bindActionCreators({select:select}, dispatch)
}

export default connect(mapStateToProps, matcDispatchToProps)(Contactlist);