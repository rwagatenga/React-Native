// App.js

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import Home from './screens/Home';
import Login from './screens/Login';
import Report from './screens/Report';

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: Home },
  LoginScreen: { screen: Login },
  ReportScreen: { screen: Report},
});

export default class App extends Component {
  static navigationOptions = {
          title: 'Home',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#000000',
            borderBottomColor: '#ffffff',
            borderBottomWidth: 3,
          },
          headerTitleStyle: {
            fontSize: 18,
          },
      };
  render() {
    return (
      <AppNavigator />
    );
  }
}