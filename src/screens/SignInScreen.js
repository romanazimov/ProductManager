import React, { Component } from 'react';
import {View,Text,StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native';
import { Logo } from '../components/Logo';
import firebase from "firebase";

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false,
    }

    onLoginButtonPress = () =>{
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(this.onLoginSuccess)
            .catch(error => {
                this.setState({
                    error:error.message
                })
            })
    }

    onSignUpPress = () =>{
        this.props.navigation.navigate('Register')
    }

    onLoginSuccess = () =>{
        this.setState({
            error:'',
            loading:false
        })
    }

    render() {
        return (

            <View style={styles.container}>
                <Logo style={styles.logo}/>
                <View style={styles.space}/>

                {/* User Inputs */}
                <TextInput
                    style={styles.textInput}
                    placeholder=' Username: '
                    value={this.state.email}
                    onChangeText={email=> this.setState({email})}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder=' Password: '
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={password=> this.setState({password})}
                />

                {/* Login Button */}
                <TouchableOpacity style = {styles.buttonContainer} onPress={this.onLoginButtonPress}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                {/* Login Error Message */}
                <TouchableOpacity>
                    <Text style={styles.loginError}>
                        {this.state.error}
                    </Text>
                </TouchableOpacity>

                {/* Signup */}
                <View style={styles.row}>
                    <Text style={styles.label}>Don’t have an account? </Text>
                    <TouchableOpacity>
                        <Text
                            style={styles.link}
                            onPress ={this.onSignUpPress}
                            >Sign up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding:20
    },
    textInput: {
        height:40,
        backgroundColor:'rgba(255,255,255,.8)',
        paddingLeft:10,
        marginBottom:15,
        borderRadius:5,
        fontSize:15,
    },
    logo: {
      justifyContent: 'center'
    },
    link: {
        fontWeight: 'bold'
    },
    loginError: {
        fontSize: 25,
        color: 'blue',
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20
    },
    buttonContainer: {
        backgroundColor: '#000',
        borderRadius: 8,
        padding: 10
    },
});

export default Login
