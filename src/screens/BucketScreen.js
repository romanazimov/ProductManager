import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton } from '../components/IconButton';

const BucketScreen = () => {
    return (
        <View style={styles.container}>
            <IconButton text = {'Airplane'}/>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#818479'
    },

})

export default BucketScreen;
