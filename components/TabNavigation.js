import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../Screens/Home'
import ProfileScreen from './../Screens/Profile'
import HistoryScreen from '../Screens/HistoryScreen'
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import FlatList from '../data/dataFlatlist'
    

  
  const TabNavigator = createMaterialBottomTabNavigator(
    {
      Home: {
        screen: HomeScreen,
      
        navigationOptions: {
          title: 'HomeScreen',
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
            </View>
          ),
        }
      },
      Profile: {
        screen: ProfileScreen,
        navigationOptions: {
          title: 'ProfileScreen',
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
            </View>
          ),
          activeColor: '#ffffff',
          inactiveColor: '#9d9b9b',
          barStyle: { backgroundColor: '#0D5061' },
        }
      },
      History: {
        screen: HistoryScreen,

        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-images'} />
            </View>
          ),
          activeColor: '#ffffff',
          inactiveColor: '#9d9b9b',
          barStyle: { backgroundColor: '#0D5061' },
        }
      },
    },
    {
      initialRouteName: 'Home',
      activeColor: '#ffffff',
      inactiveColor: '#9d9b9b',
      barStyle: { backgroundColor: '#0D5061' },
    }
  );
  
  export default createAppContainer(TabNavigator);