import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ROUTES } from '../../constraints'

export default function Cart(props) {
    const {navigation} = props
  return (
    <View>
      <Text>cart</Text>
      <TouchableOpacity onPress={()=>navigation.navigate(ROUTES.MOREINFO)}><Text>CartDetails</Text></TouchableOpacity>
    </View>
  )
}