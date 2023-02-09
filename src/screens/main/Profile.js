import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { ROUTES } from '../../constraints';

export default function Profile(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity onPress={()=>navigation.navigate(ROUTES.LOGIN)}><Text>LOGOUT</Text></TouchableOpacity>
    </View>
  );
}
