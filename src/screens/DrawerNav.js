import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from '../screens/DrawerContent'
import BucketData from "./BucketData";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return(
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {... props}/>}>
                <Drawer.Screen name="Home" component={BucketData} />
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
