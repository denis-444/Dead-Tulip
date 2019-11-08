import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import allReducers from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './App.css';

const store = createStore (allReducers);


ReactDOM.render( < App / > , document.getElementById('root'));

serviceWorker.unregister();