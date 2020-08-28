import React from 'react';
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Drawer, Text } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import firebase from "firebase";


export function DrawerContent(props){
    return(
        <View style={{flex:1, alignItems:'center'}}>
            <DrawerContentScrollView {...props}>
                <View>
                    <Text>Bucket Links (dynamically updated)</Text>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Sign Out"
                        onPress={() => {firebase.auth().signOut()}}
                    />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },

    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },

    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
})
