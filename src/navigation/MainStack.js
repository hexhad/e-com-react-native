import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Cart, Profile} from '../screens';
import {ROUTES,STORAGE} from '../constraints';
import ProductNavigation from './ProductNavigation';
import {Home, Compass, User} from 'react-native-feather';
import React, {useEffect, useState} from 'react';
import {setData, retriveData} from '../storage/async';

const Tab = createBottomTabNavigator();

export default function MainStack() {
  const [name, setName] = useState("User");
  
  async function getUserDetails() {
    let username = await retriveData(STORAGE.USERNAME);
    setName(username);
  }

  useEffect(() => {
    getUserDetails();
  }, [])
  
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Home
              stroke={focused ? '#000' : '#808080'}
              fill="#fff"
              width={20}
              height={20}
            />
          ),
        }}
        name={ROUTES.PRODUCS_NAV}
        component={ProductNavigation}
      />
      <Tab.Screen
        options={{
          headerTitleAlign: 'center',
          headerShown: true,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Compass
              stroke={focused ? '#000' : '#808080'}
              fill="#fff"
              width={20}
              height={20}
            />
          ),
        }}
        name={ROUTES.CART}
        component={Cart}
      />
      <Tab.Screen
        options={{
          headerTitleAlign: 'center',
          headerShown: true,
          tabBarShowLabel: false,
          title:name,
          tabBarIcon: ({focused}) => (
            <User
              stroke={focused ? '#000' : '#808080'}
              fill="#fff"
              width={20}
              height={20}
            />
          ),
        }}
        name={ROUTES.PROFILE}
        component={Profile}
      />
    </Tab.Navigator>
  );
}
