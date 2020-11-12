import firebase from 'firebase'
import "@react-native-firebase/firestore";
import BucketCollection from "../screens/BucketCollection";
import React from "react";


const firebaseConfig = {
    apiKey: "AIzaSyA_QGuvC0t2Glr2G0wxEXlJLhK3pxhowZE",
    authDomain: "bucketly-db3b5.firebaseapp.com",
    databaseURL: "https://bucketly-db3b5.firebaseio.com",
    projectId: "bucketly-db3b5",
    storageBucket: "bucketly-db3b5.appspot.com",
    messagingSenderId: "965985956581",
    appId: "1:965985956581:web:d9730744f380d8b2215a0c",
    measurementId: "G-XH8MWM2BBE"
}


export default class firebaseInfo {
    // Grab current state of auth
    state={
        loggedIn:null,
        user: {},
    };


    getLoggedInState = () => {
        return this.state.loggedIn
    }

    init() {
        // Initialize Firebase
        if (!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }


        //firebase.initializeApp(firebaseConfig);


        firebase.auth().onAuthStateChanged(user => {
            if (user){
                this.setState({
                    loggedIn: true, user
                });
            } else {
                this.setState({
                    loggedIn: false
                });

            }
        })
    }
}
