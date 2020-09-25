import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
export default BucketList = ({ list }) => {
        return (
            <View style={[styles.listContainer, {backgroundColor: list.color}]}>
                <Text style={styles.listTitle}>{list.name}</Text>
            </View>
        );
}

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 15,
        borderWidth: .5,
        borderRadius: 10,
        margin: 5,
        width: 225,
        alignItems: "center"
    },

    listTitle: {
        fontSize: 20,
        fontWeight: "400"
    }
})
