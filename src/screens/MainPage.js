import React, { Component } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Modal} from 'react-native';
import firebase from "firebase";
import tempData from "../data/tempData";
import BucketCollection from "./BucketCollection";
import AntDesign from "react-native-vector-icons/AntDesign";
import AddBucketModal from "../modals/AddBucketModal";
import {connect} from 'react-redux';

class MainPage extends Component {
    state = {
        isVisible: false,
        buckets: tempData,
        uid: firebase.auth().currentUser.uid,
    }

    componentDidMount() {

    }

    toggleAddBucketModal() {
        this.setState({ isVisible: !this.state.isVisible})
    }

    renderList = list => {
        return <BucketCollection list={list} updateBucket={this.updateBucket}/>
    }

    addBucket = list => {
        this.setState({ buckets: [...this.state.buckets, { ...list, id: this.state.buckets.length + 1, info: [] }] })
    }

    updateBucket = list => {
        this.setState({
            buckets: this.state.buckets.map(item => {
                return item.id === list.id ? list : item
            })
        })
    }

    render() {
        //console.log('This is the current uid: ', this.state.uid);
        return (
            <View style={styles.container}>
                {/*UI for loading into Bucket and out of it*/}
                <Modal
                    animationType={"slide"}
                    visible={this.state.isVisible}
                    onRequestClose={() => this.toggleAddBucketModal()}
                >
                    <AddBucketModal closeModal={() => this.toggleAddBucketModal()} addBucket={this.addBucket}/>
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
                    data={this.state.buckets}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => this.renderList(item)}
                    // keyboardShouldPersistTaps={"always"}
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

export default connect()(MainPage)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    divider: {
        backgroundColor: "#18b8c9",
        height: .5,
        flex: 1,
        alignSelf: "center",
        marginHorizontal: 50
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
        borderRadius: 30,
        padding: 13,
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
