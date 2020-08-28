import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';
import { IconButton } from '../components/IconButton';
import firebase from "firebase";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { DrawerContent } from '../screens/DrawerContent'
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


// Not currently working
const drawerButton = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerLeft: () => (
                <Icon.Button
                    name="ios-menu"
                    size={25}
                    backgroundColor="#009387"
                    onPress={() => navigation.openDrawer()
                    }>
                </Icon.Button>
            )
        }}

        />
    )
}

const Main = () => {
    //const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={{fontSize:30}}>Bucket Data</Text>
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
