import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';

const IconButton = ({text, onPress}) => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Image
                    source={require('./images/Bucket.png')}
                    style={styles.imageIcon}
                />
                <View style={styles.SeparatorLine} />
                <Text style={styles.text}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: .8,
        borderColor: 'black',
        height: 40,
        width: 220,
        borderRadius: 5,
        margin: 3,
    },

    imageIcon: {
        padding: 10,
        margin: 5,
        height: 30,
        width: 30,
        resizeMode: 'stretch',
    },

    SeparatorLine: {
        backgroundColor: 'black',
        width: 1,
        height: 40,
    },

    text: {
        color: '#fff',
        textAlign: 'center',
        marginLeft: 15,
        fontSize: 20
    }
})

export { IconButton };
