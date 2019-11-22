import React from "react";
import Meny from "./components/Meny";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Provider} from "react-redux";
import {createStore} from 'redux';
import allReducers from './reducers';


const store = createStore (allReducers);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="wrapper"> 
                    <Header/>
                    <Meny/>
                    <Footer/>
                </div>
            </Provider>
        );
    }
}

export default App;