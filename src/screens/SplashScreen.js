import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'

const SplashScreen = () => {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large"/>
            <Text>This is gay as fuck</Text>
        </View>
    );
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center"
        },
        horizontal: {
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10
        }
    });

export default SplashScreen
