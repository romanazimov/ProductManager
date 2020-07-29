import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const Button = ({text, onPress}) => {
    return (
        <View style={styles.viewContainer}>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Text style={styles.text}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer:{
        paddingTop: 8,
        marginBottom: 8,
        width: '100%',
    },
    container: {
        backgroundColor: 'black',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: "center",
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
