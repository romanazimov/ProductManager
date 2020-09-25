import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import  DrawerNav from '../screens/DrawerNav';
import  SecondaryScreen from '../screens/SecondaryScreen';


export default class HomeStack extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: DrawerNav
  },
  SecondaryScreen: {
    screen: SecondaryScreen
  },
},{
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);
