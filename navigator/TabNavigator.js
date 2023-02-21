import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import DocumentsScreen from '../screens/DocumentsScreen';
import TestsScreen from '../screens/TestsScreen';
import VideosScreen from '../screens/VideosScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab Home" component={HomeScreen} />
      <Tab.Screen name="Tab Videos" component={VideosScreen} />
      <Tab.Screen name="Tab Tests" component={TestsScreen} />
      <Tab.Screen name="Tab Documents" component={DocumentsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
