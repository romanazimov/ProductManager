import firebase from 'firebase'
import "@firebase/firestore"
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


class firebaseInfo {
    constructor(callback) {
        this.init(callback)
    }

    // Grab current state of auth
    state={
        loggedIn:null,
        user: {},
    };


    // getLoggedInState = () => {
    //     return this.state.loggedIn
    // }

    init(callback) {
        // Initialize Firebase
        if (!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }

        firebase.auth().onAuthStateChanged(user => {
            if (user){
                this.state.user = true
                callback(null, user)
            } else {
                this.state.user = false

            }
        })
    }

    getLists(callback) {
        let ref = this.ref.orderBy('name')

        this.unsubscribe = ref.onSnapshot(snapshot => {
            buckets = []

            snapshot.forEach(doc => {
                buckets.push({ id: doc.id, ...doc.data() })
            })

            callback(buckets)
        })
    }

    addBucket(buckets) {
        let ref = this.ref
        ref.add(buckets)
    }

    updateBucketList(buckets) {
        let ref = this.ref
        ref.doc(buckets.id).update(buckets)
    }

    get userId() {
        return firebase.auth().currentUser.uid
    }

    detach() {
        this.unsubscribe()
    }

    get ref() {
        return firebase
            .firestore()
            .collection('users')
            .doc(this.userId)
            .collection('buckets')
    }
}

export default firebaseInfo
