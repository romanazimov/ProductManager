import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView} from 'react-native';

const Input = (props) => {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder={props.children}
                    leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                    style={styles.input}
                />
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        width: '75%',
        borderRadius: 8,
        paddingVertical: 5
    },

    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.8)',
        //marginBottom: 15,
        color: '#000',
        paddingHorizontal: 10
    },

});

export { Input };
