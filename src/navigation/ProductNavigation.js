import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Product, MoreInfo} from '../screens';
import {ROUTES} from '../constraints';

const Stack = createStackNavigator();

export default function CartNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerBackTitleVisible:false}} initialRouteName={ROUTES.HOME} >
      <Stack.Screen name={ROUTES.PRODUCTS} component={Product} options={{headerTitleAlign: 'center', headerLeft: null}} />
      <Stack.Screen name={ROUTES.MORE_INFO} component={MoreInfo} options={{headerTitleAlign: 'center'}}/>
    </Stack.Navigator>
  );
}
