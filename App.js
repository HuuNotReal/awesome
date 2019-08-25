import React from 'react';
//import { Text, View } from 'react-native';

//import TabNavigator from './BottomNavi';
import TabNavigator from './BottomNavi';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import LoginPage from './Pages/LoginPage2';

import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
const App = createSwitchNavigator(
  {
    Auth: LoginPage,
    Main: TabNavigator,
  },
  {
    initialRouteName: 'Auth',
  }
);
export default createAppContainer(App);
