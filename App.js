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
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'ListView is deprecated']);
import Home from './screens/Home';
import Login from './screens/Login';
import Report from './screens/Report';
import Makes from './screens/Makes';
import Views from './screens/Views';
import FinalReport from './screens/FinalReport';
import GradientHeader from './screens/Gradient';
import DailPay from './screens/DailPay';
import Vreport from './screens/Vreport';

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: Home },
  LoginScreen: { screen: Login },
  ReportScreen: { screen: Report},
  MakesScreen: { screen: Makes },
  ViewScreen: { screen: Views },
  FinalScreen: { screen: FinalReport },
  PaymentScreen: { screen: DailPay },
  VrepoScreen: { screen: Vreport },

});
export default class App extends Component {
  static navigationOptions = {
          title: 'Home',
          Home: props => <GradientHeader {...props} />,
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
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