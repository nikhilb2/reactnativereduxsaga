import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import FirstTimeScreen from '../screens/FirstTimeScreen'



const MainStack = createStackNavigator({
  Main: MainTabNavigator,
  FirstTime: FirstTimeScreen
},{
  headerMode: 'none',
})

export default createAppContainer(createSwitchNavigator(
  {
    Splash: FirstTimeScreen,
    App: MainStack
  },
  {
    initialRouteName: 'Splash'
  }
))
