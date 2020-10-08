import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, KeyboardAvoidingView, TextInput, Modal } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import AddItemModal from "./AddItemModal";
import ExitButton from "../components/ExitButton";

export default class BucketModal extends Component {
    state = {
        visible: false
    }

    // Per item container
    renderInfo = info => {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.columnInfo}>
                    <Text>{info.name}</Text>
                </View>
                <View style={styles.columnInfo}>
                    <Text>{info.quantity}</Text>
                </View>
                <View style={styles.columnInfo}>
                    <Text>{info.location}</Text>
                </View>
            </View>
        )
    }

    toggleModal() {
        this.setState({ visible: !this.state.visible})
    }

    render() {
        const list = this.props.list
        return (
            // <SafeAreaView style={styles.container, {height: '80%', width: '50%'}}>
            <SafeAreaView style={styles.container}>

                {/* Get out of BucketModal */}
                <TouchableOpacity
                    style={{position: "absolute", top: 64, right: 32, zIndex: 10}}
                    onPress={this.props.closeModal}
                >
                    <AntDesign name={"close"} size={30}/>
                </TouchableOpacity>

                {/* Display Header/ Name of Bucket*/}
                <View style={[styles.section, styles.header]}>
                    <View>
                        <Text style={styles.title}>{list.name}</Text>
                    </View>
                </View>

                {/* Column Names*/}
                <View style={{flexDirection: "row"}}>
                    <View style={styles.boxData}>
                        <Text style={styles.columnNameText}>Name</Text>
                    </View>
                    <View style={styles.boxData}>
                        <Text style={styles.columnNameText}>Quantity</Text>
                    </View>
                    <View style={styles.boxData}>
                        <Text style={styles.columnNameText}>Location</Text>
                    </View>
                </View>

                {/* Collection Container */}
                <View style={[styles.section, {flex: 1}]}>
                    <FlatList
                        data={list.info}
                        renderItem={({item}) => this.renderInfo(item)}
                        keyExtractor={item => item.name}
                        //contentContainerStyle={styles.collectionContainer}
                    />
                </View>

                <View>
                    {/* Small Modal to open and add to collection*/}
                    <View>
                        <Modal
                            transparent={true}
                            animationType={"fade"}
                            visible={this.state.visible}
                        >
                            <View style={{backgroundColor: '#000000cc', blurType: "dark",flex: 1}}>
                                <View style={styles.testModal}>
                                    <AddItemModal closeModal={() => this.toggleModal()}/>
                                </View>
                            </View>
                        </Modal>
                    </View>

                    {/* Button to open modal*/}
                    <View style={{ marginBottom: 40}}>
                        <TouchableOpacity style={styles.add} onPress={() => this.toggleModal()}>
                            <AntDesign name={"plus"} size={30}/>
                        </TouchableOpacity>

                        <Text style={styles.addText}>Add New</Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#5c95bd',
    },
    header: {
        paddingTop: 50,
        paddingBottom: 40,
        paddingLeft: 10
    },
    title: {
        fontSize: 36,
        fontWeight: "800"
    },
    section: {
        alignSelf: "stretch",
        // borderWidth: 2
    },
    // collectionContainer: {
    //
    // },
    itemContainer: {
        flexDirection: "row",
        // alignContent: 'stretch',
        // alignSelf: 'flex-start'
    },
    boxData: {
        flex: 1,
        // height: 50,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#b1b2b4'
    },
    columnNameText: {
        fontSize: 22,
        fontWeight: "600",
        paddingVertical: 10
    },
    columnInfo: {
        flex: 1,
        height: 50,
        backgroundColor: '#dbdbdb',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#b1b2b4'
    },
    add: {
        borderWidth: 1,
        borderRadius: 30,
        padding: 13,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#18b8c9",
    },
    testModal: {
        height: '75%',
        width: '75%',
        borderWidth: 1,
        borderColor: "#000",
        flex: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 300,
        borderRadius: 10,
        backgroundColor: '#FFF'
        // If you want the modal to appear as a distinct box with the underlying
        // view "dimmed", to the outer view add a background color with transparency
        // -- e.g., backgroundColor: '#00000080' (white with 50% opacity) and a solid
        // color and padding to the inner view, e.g., backgroundColor: '#fff', padding: 20
    }
});
