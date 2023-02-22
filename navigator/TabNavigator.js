import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import DocumentsScreen from '../screens/DocumentsScreen';
import TestsScreen from '../screens/TestsScreen';
import VideosScreen from '../screens/VideosScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: true}}>
      <Tab.Screen name="Tab Home" component={HomeScreen} />
      <Tab.Screen
        tabBarShowLabel={false}
        name="Tab Videos"
        component={VideosScreen}
      />
      <Tab.Screen
        tabBarShowLabel={false}
        name="Tab Tests"
        component={TestsScreen}
      />
      <Tab.Screen
        tabBarShowLabel="false"
        name="Tab Documents"
        component={DocumentsScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
