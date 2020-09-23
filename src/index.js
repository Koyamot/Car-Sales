import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';


import { FeatureReducer } from './reducers/FeatureReducer'

import {createStore, applyMiddleware} from 'redux'; 
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const store = createStore(FeatureReducer, applyMiddleware(logger))
console.log(store);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, rootElement);
