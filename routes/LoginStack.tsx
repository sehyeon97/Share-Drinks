import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import Login from '../screens/Login';
import BottomTabNavigator from './FavoriteTab';

const LoginStack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator initialRouteName="Login">
        <LoginStack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <LoginStack.Screen
          name="FavoritesTab"
          component={BottomTabNavigator}
          options={{title: 'App Name'}}
        />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}
