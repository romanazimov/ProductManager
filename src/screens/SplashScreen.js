import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'

const SplashScreen = () => {
    return(
        <View style={styles.container}>
            <ActivityIndicator size="large" color = "#e67e07"/>
        </View>
    )
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center"
        },
        horizontal: {
            justifyContent: "space-around",
            padding: 10
        }
    });

export default SplashScreen
