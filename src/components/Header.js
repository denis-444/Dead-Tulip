import React from "react";
import logo from "../images/logo.jpg";


class Header extends React.Component {
     render() {
        return (
            <div className="Header">
                <img src={logo} alt="Картинка" />
            </div>
        );
    }
 }

export default Header;