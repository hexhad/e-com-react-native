import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute, useIsFocused} from '@react-navigation/native';

export default function Product() {
  const route = useRoute();
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log(isFocused);
  }, [isFocused]);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
