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
import Makes from './screens/Makes';
import Views from './screens/Views';
import FinalReport from './screens/FinalReport';

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: Home },
  LoginScreen: { screen: Login },
  ReportScreen: { screen: Report},
  MakesScreen: { screen: Makes },
  ViewScreen: { screen: Views },
  FinalScreen: { screen: FinalReport },
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