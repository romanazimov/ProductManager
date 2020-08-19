import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { IconButton } from '../components/IconButton';
import auth, { firebase } from '@react-native-firebase/auth';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from './LoginScreen';
import { Button } from '../components/Button'

import { TouchableOpacity } from 'react-native-gesture-handler';



function CheckUser({navigation}){
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    
    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
      }
    
      useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, [])
      if (initializing) return null;


    if(!user){
        console.log('gay');
        () => navigation.navigate('Login');
        return null;
    }
    return (
        <View>
            <Text>This is my suicide note. You did it Roman, u killed me...</Text>
        </View>
    )
}

const BucketScreen = ({navigation}) => {
    return (
        <View style={styles.container2}>
        <CheckUser/>
            <IconButton text = {'Airplane'}/>

            <Button 
                title = 'log out'
                text="log out" 
                onPress={() => navigation.navigate('Login')}
                />
        </View>
    )
}


//May want to move all this to its own file***********************************
const Stack = createStackNavigator()

export default function App() {
    return(
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={BucketScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}
//*****************************************************************************
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#818479'
    },

})
