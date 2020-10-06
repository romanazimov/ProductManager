import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";

export default class AddBucketModal extends Component {
    backgroundColors = ["#60db7f", "#e07a5f", "#3d405b", "#81b29a", "#f2cc8f", "#24A6D9", "#61c6c9"]
    state = {
        name: "",
        color: this.backgroundColors[0]
    }

    renderColors() {
        return this.backgroundColors.map(color => {
            return (
                <TouchableOpacity
                    key={color}
                    style={[styles.colorSelect, {backgroundColor: color}]}
                    onPress={() => this.setState({ color })}
                />
            )
        })
    }

    createBucket = () => {
        const {name, color} = this.state
         tempData.push({
             name,
             color,
             info: []
         })

        this.setState({ name: ""})
        this.props.closeModal()
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior={"padding"}>
                <TouchableOpacity
                    style={{position: "absolute", top: 64, right: 32}}
                    onPress={this.props.closeModal}
                >
                    <AntDesign name={"close"} size={30}/>
                </TouchableOpacity>

                <View style={{alignSelf: "stretch", marginHorizontal: 32}}>
                    <Text style={styles.title}> Create Bucket</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder={"Bucket Name"}
                        onChangeText={text => this.setState({name: text})}
                    />

                    <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 15}}>
                        {this.renderColors()}
                    </View>

                    <TouchableOpacity
                        style={[styles.createButton, {backgroundColor: this.state.color}]}
                        onPress={this.createBucket}
                    >
                        <Text style={{color: "#FFF", fontWeight: "600"}}>Create!</Text>
                    </TouchableOpacity>
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
    inputBox: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#000",
        borderRadius: 6,
        height: 50,
        marginTop: 8,
        paddingHorizontal: 16,
        fontSize: 18
    },
    createButton: {
        marginTop: 24,
        height: 50,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000"
    },
    colorSelect: {
        width: 30,
        height: 30,
        borderRadius: 4
    }
});
