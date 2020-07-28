import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { Button } from './src/components/Button'
import { Input } from "./src/components/Input";
import Logo from './src/components/Logo';


const App = () => (
    <View style={styles.container}>
        <Logo/>
        <View style={styles.space}/>
        <Input>
            Username:
        </Input>
        <Input>
            Password:
        </Input>

        <Button>
            Login
        </Button>
        <View style={styles.row}>
            <Text style={styles.label}>Don’t have an account? </Text>
            <TouchableOpacity>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
);

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

export default App;
