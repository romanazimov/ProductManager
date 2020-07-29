import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { Button } from '../components/Button'
import { Input } from '../components/Input';
import { Logo } from '../components/Logo';

const _onRegisterPressed = () => {
    const emailError = 3
}

const Register = () => (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}
                          style={styles.container}>
        <View style={styles.space}/>
        {/* <View style={styles.boxView}> */}
        <Logo/>
    
            <Input placeholder = ' Email Address: '/>
            <Input placeholder = ' Password: '/>
            <Input placeholder = ' Confirm Password: '/>

            <Button text="Register" onPress={_onRegisterPressed}/>
            <View style={styles.row}>
                <Text style={styles.label}>Have an account? </Text>
                <TouchableOpacity>
            <Text style={styles.link}>Sign in</Text>
            </TouchableOpacity>
            {/* </View> */}
          
        </View>
    </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#83968F',
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
