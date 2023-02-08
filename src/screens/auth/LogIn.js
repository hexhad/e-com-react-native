import { View, Text ,TouchableOpacity } from 'react-native'
import React from 'react'
import { ROUTES } from '../../constraints'

export default function LogIn(props) {
  const {navigation} = props
  return (
    <View>
      <Text>LogIn</Text>
      <TouchableOpacity onPress={()=>navigation.navigate(ROUTES.HOME)}><Text>Login</Text></TouchableOpacity>
    </View>
  )
};