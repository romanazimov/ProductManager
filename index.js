/**
 * @format
 */

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import Login from './src/screens/LoginScreen';
import Register from './src/screens/RegisterScreen';
import App from './App';
import Bucket from './src/screens/BucketScreen';

AppRegistry.registerComponent('ProductManager', () => Bucket);
