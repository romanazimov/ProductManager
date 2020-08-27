import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';
import { IconButton } from '../components/IconButton';
import firebase from "firebase";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { DrawerContent } from '../screens/DrawerContent'
import SignInScreen from './SignInScreen'

const Drawer = createDrawerNavigator();

const Main = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
            <TouchableOpacity onPress={() => firebase.auth().signOut()}>
                <Text style={{color: '#FFF', paddingBottom: 40, fontSize: 20}} >Logout</Text>
            </TouchableOpacity>
        </View>
    )
}


const BucketScreen = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {... props}/>}>
                <Drawer.Screen name="Home" component={Main} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#818479',
    },

});

export default BucketScreen;
