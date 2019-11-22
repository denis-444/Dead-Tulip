import React, {Component} from "react";
import {connect} from "react-redux";

class Content extends Component {
    render () {
        if (!this.props.contact) {
            return (<p>Выберите контакт</p>)
        }
        return (
            <div>
                <h2>{this.props.contact.value}</h2>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        contact: state.active
    };
}


export default connect (mapStateToProps) (Content);