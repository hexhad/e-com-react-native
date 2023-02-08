import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function MoreInfo(props) {
    const {navigation} = props
  return (
    <View>
      <Text>MoreInfo</Text>
      <TouchableOpacity onPress={()=>navigation.goBack()}><Text>Cart</Text></TouchableOpacity>
    </View>
  )
}