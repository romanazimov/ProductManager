import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";

export default class AddBucketModal extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior={"padding"}>
                <TouchableOpacity style={{position: "absolute", top: 64, right: 32}} onPress={this.props.closeModal}>
                    <AntDesign name={"close"} size={30}/>
                </TouchableOpacity>

                <View style={{alignSelf: "stretch", marginHorizontal: 32}}>
                    <Text style={styles.title}> Create Bucket Collection</Text>
                    <TextInput style={styles.input} placeholder={"Bucket Name"}/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: "800",
        alignSelf: "center",
        marginBottom: 16
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#FFF",
        borderRadius: 6,
        height: 50,
        marginTop: 8,
        paddingHorizontal: 16,
        fontSize: 18
    }
});
