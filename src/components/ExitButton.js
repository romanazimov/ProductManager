import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";


export default class ExitButton extends Component {
    render() {
        return (
            <TouchableOpacity
                style={{position: "absolute", top: 64, right: 32, zIndex: 10}}
                onPress={this.props.closeModal}
            >
                <AntDesign name={"close"} size={30}/>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});
