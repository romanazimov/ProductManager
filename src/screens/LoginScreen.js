import React, {useState, useEffect} from 'react';
import {View,Text,StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { Button } from '../components/Button'
import { Input } from '../components/Input';
import { Logo } from '../components/Logo';
import auth from '@react-native-firebase/auth';





function LoginApp() {
    // Set an initializing state whilst Firebase connects
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
  
    if (!user) {
      return (
        <View>
          <Text>Login</Text>
        </View>
      );
    }
  
    return (
      <View>
        <Text>Welcome {user.email}</Text>
      </View>
    );
  }


const Login = () => {

  const[username, setUsername] = useState('Username');
  const[password, setPassword] = useState('password');

  const _onLoginPressed = () =>{
    auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        console.log('User signed in!');
      }) 
};
    return(
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}
                          style={styles.container}>
        <Logo/>
        <View style={styles.space}/>
        <LoginApp/>
        <Input 
          placeholder = ' Username: '
          onChangeText={(val) => setUsername(val)}
        />
        <Input 
          placeholder = ' Password: '
          onChangeText={(val) => setPassword(val)}
        />

        <Button text="Login" onPress={_onLoginPressed}/>
        <View style={styles.row}>
            <Text style={styles.label}>Don’t have an account? </Text>
            <TouchableOpacity>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
)};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#818479',
        alignItems: 'center',
        justifyContent: 'center'
    },
    space:{
        flex: .7,
        paddingBottom: 20

    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
      },
    link: {
        fontWeight: 'bold'
    }
});

export default Login;
