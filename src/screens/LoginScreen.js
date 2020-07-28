import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from '../components/LoginCredentials';

/*
export default class LoginScreen extends component {
    render() {
        return (
            <View style={styles.container}>
                <Button />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
*/


export default class loginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.logoContainer}>
                    <Text style={styles.mainText}>Hello and welcome to ProductManager.</Text>
                </View>

                <View>
                    <LoginForm/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#818479'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    mainText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 26,
        textAlign: 'center'
    },
});
