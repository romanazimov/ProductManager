import React, { Component } from 'react';
import {Alert, View,Text,StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { Button } from '../components/Button'
import { Input } from '../components/Input';
import { Logo } from '../components/Logo';
import firebase from "firebase";


onSignInPress = () =>{
    this.props.navigation.goBack();
}

class Register extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        error: '',
        loading: false
    }

    onRegisterPress = () => {
        if (this.state.email === '' || this.state.password ==='' || this.state.confirmPassword ===''){
            Alert.alert('Enter details!')
        } else if(!(this.state.password === this.state.confirmPassword)) {
            Alert.alert("Passwords don't match!")
        }else {
            this.setState({
                loading: true,
            })
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email,this.state.password)
                .then((res) => {
                    res.user.updateProfile({
                        displayName: this.state.dsiplayName
                    })
                    console.log('User registered successfully!')
                })
                .catch(error => this.setState({errorMessage: error.message}), Alert.alert('Email already exists') )
            firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(this.onLoginSuccess)
                .catch(error => {
                    this.setState({
                        error:error.message
                    })
                })
        }
    }

    onSignInPress = () =>{
        this.props.navigation.goBack();
    }

    render(){
        return(
            
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}
            style={styles.container}>
        <View style={styles.space}/>
        <Logo/>

        <Input 
                placeholder = ' Email Address: '
                value ={this.state.email}
                onChangeText={email =>this.setState({email})}
            />
        <Input 
                placeholder = ' Password: '
                value ={this.state.password}
                onChangeText={password =>this.setState({password})}
            />
        <Input 
                placeholder = ' Confirm Password: '
                value ={this.state.confirmPassword}
                onChangeText={confirmPassword => this.setState({confirmPassword})}
            />

        <Button text="Register" onPress = {this.onRegisterPress}/>
        <View style={styles.row}>
        <Text style={styles.label}>Have an account? </Text>
        <TouchableOpacity>
        <Text style={styles.link} onPress = {this.onSignInPress}>Sign in</Text>
        </TouchableOpacity>

        </View>
        </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#818479',
        alignItems: 'center',
        justifyContent: 'center'
    },
    space:{
        flex: .0001,
        paddingBottom: 20

    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold'
    },
    boxView: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "black",
        backgroundColor: '#32BCE1',
        width: '90%',
        alignItems:'center',
        padding: 20
    }
});

export default Register;
