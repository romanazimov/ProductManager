import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { Button } from '../components/Button'
import { Input } from '../components/Input';
import { Logo } from '../components/Logo';

const _onLoginPressed = () => {
    const emailError = 3
}

const Login = () => (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}
                          style={styles.container}>
        <Logo/>
        <View style={styles.space}/>
        <Input placeholder = ' Username: '/>
        <Input placeholder = ' Password: '/>

        <Button text="Login" onPress={_onLoginPressed}/>
        <View style={styles.row}>
            <Text style={styles.label}>Don’t have an account? </Text>
            <TouchableOpacity>
                <Text style={styles.link}>Sign up</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#818479',
        alignItems: 'center',
        justifyContent: 'center'
    },
    space:{
        flex: .7,
        paddingBottom: 20

    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold'
    }
});

export default Login;
