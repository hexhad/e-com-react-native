import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Product, MoreInfo} from '../screens';
import {ROUTES} from '../constraints';

const Stack = createStackNavigator();

export default function CartNavigation() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME}>
      <Stack.Screen name={ROUTES.PRODUCTS} component={Product} />
      <Stack.Screen name={ROUTES.MORE_INFO} component={MoreInfo} />
    </Stack.Navigator>
  );
}
