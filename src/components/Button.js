import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>
                {props.children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '75%'
    },

    text: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    }
})

export { Button };
