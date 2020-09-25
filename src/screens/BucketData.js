import React, { Component } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Modal} from 'react-native';
import firebase from "firebase";
import tempData from "../data/tempData";
import BucketList from "../data/BucketList";
import AntDesign from "react-native-vector-icons/AntDesign";
import AddBucketModal from "./AddBucketModal";

export default class BucketData extends Component {
    state = {
        addVisibility: false
    }

    toggleAddBucketModal() {
        this.setState({ addVisibility: !this.state.addVisibility})
    }

    render() {
        return (
            <View style={styles.container}>
                {/*UI for loading into Bucket and out of it*/}
                <Modal
                    animationType={"slide"}
                    visible={this.state.addVisibility}
                    onRequestClose={() => this.toggleAddBucketModal()}
                >
                    <AddBucketModal closeModal={() => this.toggleAddBucketModal()}/>
                </Modal>

                {/*Sending props into Drawer*/}
                {/*<DrawerContentScrollView {...props}>*/}
                {/*</DrawerContentScrollView>*/}

                {/*Title*/}
                <View style={{ flexDirection: "row"}}>
                    <Text style={styles.title}>
                        Bucket <Text style={{ fontWeight: "300", color: "#18b8c9"}}>Collection</Text>
                    </Text>
                </View>

                {/*Line Between*/}
                <View style={{ flexDirection: "row"}}>
                    <View style={styles.divider}/>
                </View>

                {/*List Data*/}
                <FlatList
                    style={{paddingVertical: 30}}
                    data={tempData}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <BucketList list={item}/>
                    )}
                />

                {/* Add new bucket button */}
                <View style={{ marginBottom: 40}}>
                    <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddBucketModal()}>
                        <AntDesign name={"plus"} size={30}/>
                    </TouchableOpacity>

                    <Text style={styles.addText}>Add New</Text>
                </View>
            </View>
        );
    }
}

// export default class BucketData extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>User: {firebase.auth().currentUser.uid}</Text>
//                 <Text style={{fontSize:30}}>Bucket Data</Text>
//             </View>
//         );
//     }
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    divider: {
        backgroundColor: "#18b8c9",
        height: .9,
        flex: 1,
        alignSelf: "center"
    },
    title: {
        fontSize: 28,
        fontWeight: "800",
        paddingHorizontal: 25,
        paddingVertical: 30
    },

    bottomDrawerSection: {
        marginBottom: 20,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    addList: {
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#18b8c9",
    },
    addText: {
        fontWeight: "400",
        fontSize: 14,
        marginTop: 6
    }
})
