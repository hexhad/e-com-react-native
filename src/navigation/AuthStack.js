import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../screens';
import {ROUTES} from '../constraints';
import MainStack from './MainStack';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME} screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.HOME} component={MainStack} />
    </Stack.Navigator>
  );
}
