import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { IconButton } from '../components/IconButton';
import firebase from "firebase";

const BucketScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <IconButton text = {'Airplane'}/>

            <TouchableOpacity onPress={() => firebase.auth().signOut()}>
                <Text style={{color: '#FFF'}} >Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: .2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#818479'
    },

})

export default BucketScreen;
