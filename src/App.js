import React from "react";
import Meny from "./components/Meny";
import Header from "./components/Header";
import Footer from "./components/Footer";


class App extends React.Component {
    render() {
        return (
            <div className="wrapper"> 
                <Header/>
                <Meny/>
                <Footer/>
            </div>
        );
    }
}

export default App;