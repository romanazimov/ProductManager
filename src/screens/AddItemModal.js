import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    FlatList,
    SafeAreaView
} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";

// create a component
export default class AddItemModal extends Component {
    state = {
        newItemName: "",
        newItemQuantity: "",
        newItemLocation: "",
    }


    createItem = (name, quantity, location) => {
        const myObj = {
            newName: name,
            newQuantity: quantity,
            newLocation: location
        }

        this.props.addItem(myObj)

        this.state.newItemName = ""
        this.state.newItemQuantity = ""
        this.state.newItemLocation = ""
        // console.log(this.state.newItemLocation)
        this.props.closeModal()

    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                {/* Get out of BucketModal */}
                <TouchableOpacity
                    style={{position: "absolute", top: 10, right: 10}}
                    onPress={this.props.closeModal}
                >
                    <AntDesign name={"close"} size={30}/>
                </TouchableOpacity>

                <View style={{alignSelf: "stretch", marginHorizontal: 32}}>
                    <TextInput
                        style={styles.inputBox}
                        placeholder={"Item Name"}
                        onChangeText={nameText => this.setState({newItemName: nameText})}
                        value={this.state.newItemName}
                    />
                </View>
                <View style={{alignSelf: "stretch", marginHorizontal: 32}}>
                    <TextInput
                        style={styles.inputBox}
                        placeholder={"Quantity"}
                        onChangeText={quantityText => this.setState({newItemQuantity: quantityText})}
                        value={this.state.newItemQuantity}
                    />
                </View>
                <View style={{alignSelf: "stretch", marginHorizontal: 32}}>
                    <TextInput
                        style={styles.inputBox}
                        placeholder={"Location"}
                        onChangeText={locationText => this.setState({newItemLocation: locationText})}
                        value={this.state.newItemLocation}
                    />
                </View>

                <TouchableOpacity
                    style={{flexDirection: "row", position: 'absolute', bottom: 5, justifyContent: "space-between"}}
                    onPress={() => this.createItem(this.state.newItemName, this.state.newItemQuantity, this.state.newItemLocation)}
                >
                    <View style={styles.box}>
                        <Text>Submit</Text>
                    </View>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5
    },
    inputBox: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#000",
        borderRadius: 6,
        height: 50,
        paddingHorizontal: 18,
        marginVertical: 3,
        fontSize: 18,
        bottom: 0
    },
    buttonCont: {
        borderWidth: 5,
    },
    submit: {
        textAlign: 'center',
        textAlignVertical: 'top',
        height: 30,
        width: 100,
        paddingVertical: 2,
        borderWidth: StyleSheet.hairlineWidth
    },
    box: {
        height: 40,
        width: 100,
        borderWidth: 1,
        borderColor: "#000",
        justifyContent: 'center',
        alignItems: 'center',
    },
    textinside: {
    }
});
