import React from 'react';
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Drawer, Text } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import firebase from "firebase";

export function DrawerContent(props){
    return(
        <View style={styles.container}>
            {/*<DrawerContentScrollView {...props}>*/}
            {/*    <View style={{marginTop: 0}}>*/}
            {/*        <Text style={{fontSize: 30, fontWeight: "600"}}>User Hub</Text>*/}
            {/*    </View>*/}
            {/*</DrawerContentScrollView>*/}

            <View style>
                <Text style={{fontSize: 30, fontWeight: "600"}}>User Hub</Text>
                <Text>User: {firebase.auth().currentUser.uid}</Text>
            </View>

            <View style={styles.container}>
            </View>

            {/*Sign out user button*/}
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
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
