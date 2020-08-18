/*
import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { IconButton} from './src/components/IconButton';

const App = () => (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}
                          style={styles.container}>
        <View style={styles.container}>
            <IconButton text = {'Airplane'}/>
        </View>
    </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#818479',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default App;
*/


import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({navigation}) {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                title="Go to SecondScreen"
                onPress={() => navigation.navigate('Second')} />
        </View>
    )
}

function SecondScreen() {
    return (
        <View>
            <Text>Welcome to the SecondScreen</Text>
        </View>
    )
}

const Stack = createStackNavigator()

export default function App() {
    return(
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Second" component={SecondScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
