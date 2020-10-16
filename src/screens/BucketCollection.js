import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import BucketModal from "../modals/BucketModal";

export default class BucketCollection extends Component {
    state = {
        isVisible: false
    }

    toggleAddBucketModal() {
        this.setState({isVisible: !this.state.isVisible})
    }

    render () {
        const list = this.props.list
        const invCount = list.info.filter(bucket => bucket.name).length
        return (
            <View>
                <Modal
                    //transparent={true}
                    height={0.5}
                    animationType={"slide"}
                    visible={this.state.isVisible}
                    onRequestClose={() => this.toggleAddBucketModal()}
                >
                    <BucketModal
                        list={list}
                        closeModal={() => this.toggleAddBucketModal()}
                        updateBucket={this.props.updateBucket}
                    />
                </Modal>
                <TouchableOpacity
                    style={[styles.listContainer, {backgroundColor: list.color}]}
                    onPress={() => this.toggleAddBucketModal()}
                >
                    <Text style={styles.listTitle}>{list.name}</Text>
                    <Text style={styles.count}>Total: {invCount}</Text>
                </TouchableOpacity>
                <View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        //flexDirection: "row",
        paddingVertical: 20,
        borderWidth: .5,
        borderRadius: 10,
        margin: 5,
        width: 225,
        alignItems: "center"
    },
    count: {
        fontSize: 13,
        position: "absolute",
        right: 0,
        paddingRight: 3
    },
    listTitle: {
        fontSize: 20,
        fontWeight: "400"
    }
})
