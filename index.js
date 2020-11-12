import React, {Component} from 'react';
import App from './App';
import {AppRegistry} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './src/redux/loggedIn';


const store = createStore(reducer);

const Main = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('ProductManager', () => Main);
