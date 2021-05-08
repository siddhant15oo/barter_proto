import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import RequestItemScreen from '../screens/RequestItemScreen';


export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/icon.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Donate",
    }
  },
  RequestItem: {
    screen: RequestItemScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/splash.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Request",
    }
  }
});
