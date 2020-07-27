import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView} from 'react-native';

export default class login extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <TextInput
                    placeholder={"Enter your username"}
                    style={styles.input}
                />
                <TextInput
                    placeholder={"Enter your password"}
                    secureTextEntry
                    style={styles.input}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 50
    },

    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.8)',
        marginBottom: 15,
        color: '#000',
        paddingHorizontal: 10
    },

    buttonContainer: {
        backgroundColor: '#000',
        paddingVertical: 15
    },

    buttonText: {
        textAlign: 'center',
        color: "#FFF",
        fontWeight: '700'
    }

});
