import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Button } from './src/components/Button'
import { Input } from "./src/components/Input";

const App = () => (
    <View style={styles.container}>
        <Input>
            Username:
        </Input>
        <Input>
            Password:
        </Input>

        <Button>
            Login
        </Button>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#818479',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
