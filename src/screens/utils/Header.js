import { View, Text } from 'react-native'
import React from 'react'
import {Header as styles} from './styles';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.mainText}>Hello</Text>
    </View>
  )
}