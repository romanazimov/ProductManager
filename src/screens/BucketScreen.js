import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { IconButton } from '../components/IconButton';
import firebase from "firebase";

const  BucketScreen = ({navigation}) => {
    const pressHandler = () => {
        //navigation.navigate('ReviewDetails');
        navigation.push('SecondaryScreen');
      }

    return (
        <View style={styles.container}>
            <IconButton text = {'Airplane'} onPress = {pressHandler}/>

            <TouchableOpacity onPress={() => firebase.auth().signOut()}>
                <Text style={{color: '#FFF'}} >Logout</Text>
            </TouchableOpacity>
        </View>
    )};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#818479'
    },

});

export default BucketScreen;
