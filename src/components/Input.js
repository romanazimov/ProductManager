import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const Input = ({placeholder, ...props}) => {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder={placeholder}
                    leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                    style={styles.input}
                    {...props}
                />
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        width: '75%',
        borderRadius: 8,
        paddingVertical: 5,
        marginBottom: 8,
    },

    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,1)',
        color: '#000',
        paddingHorizontal: 10,
        borderColor: 'black',
        borderWidth: 1,
    },

});

export { Input };
