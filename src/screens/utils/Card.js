import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Card as styles} from './styles';

export default function Card(props) {
  const {onPress, item} = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.title}>{item.brand}</Text>
      <Text style={styles.desc}>{item.description}</Text>
      <Image source={{uri: item.images[0]}} style={styles.image} />
    </TouchableOpacity>
  );
}
