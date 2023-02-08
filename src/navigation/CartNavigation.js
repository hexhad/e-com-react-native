import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Cart, MoreInfo} from '../screens';
import {ROUTES} from '../constraints';
import MainStack from './MainStack';

const Stack = createStackNavigator();

export default function CartNavigation() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.CART} screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.CART} component={Cart} />
      <Stack.Screen name={ROUTES.MOREINFO} component={MoreInfo} />
    </Stack.Navigator>
  );
}
