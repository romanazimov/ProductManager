import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SignInScreen from '../screens/SignInScreen';
import RegistrationScreen from '../screens/RegisterScreen'

export default class HomeStack extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  SignIn: {
    screen: SignInScreen
  },
  Register: {
    screen: RegistrationScreen
  },
},{
  initialRouteName: "SignIn"
});

const AppContainer = createAppContainer(AppNavigator);
