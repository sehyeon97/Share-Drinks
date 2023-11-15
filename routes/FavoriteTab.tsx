import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorite from '../screens/Favorite';
import Profile from '../screens/profile';
import RandomDrinks from '../screens/RandomDrinks';
import React from 'react';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorites" component={Favorite} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Random" component={RandomDrinks} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
