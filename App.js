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
