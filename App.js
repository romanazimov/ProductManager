import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import Splash from './src/screens/SplashScreen'
import firebase from 'firebase'
import firebaseInfo from "./src/firebase/firebaseInfo";
import HomeNavigator from './src/routes/HomeStack'
import LogNavigator from './src/routes/LoggedOutStack'
import {connect} from 'react-redux';

class App extends Component {

    // Grab current state of auth
    state={
        loggedIn:null,
        user: {},
    };

    componentDidMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyA_QGuvC0t2Glr2G0wxEXlJLhK3pxhowZE",
            authDomain: "bucketly-db3b5.firebaseapp.com",
            databaseURL: "https://bucketly-db3b5.firebaseio.com",
            projectId: "bucketly-db3b5",
            storageBucket: "bucketly-db3b5.appspot.com",
            messagingSenderId: "965985956581",
            appId: "1:965985956581:web:d9730744f380d8b2215a0c",
            measurementId: "G-XH8MWM2BBE"
        };

        // Initialize Firebase
        if (!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }


        //firebase.initializeApp(firebaseConfig);


        firebase.auth().onAuthStateChanged(user => {
            if (user){
                this.setState({
                    //loggedIn: true, user
                    loggedIn: true
                });
            } else {
                this.setState({
                    loggedIn: false
                });

            }
        })
    }

    renderContent = () => {
         switch (this.state.loggedIn) {
            // If loggedIn visit Bucket DB
            case true:
                return <HomeNavigator/>
            // Loading bar
            default:
                return <Splash/>
            // else visit SignIn Screen
            case false:
                return <LogNavigator/>

        }
    }


    render() {
        return (
            <View style={styles.container}>
                {this.renderContent()}
            </View>
    );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        height:'100%',
        width:'100%',
        backgroundColor: '#818479'
    },
})

export default connect()(App);
