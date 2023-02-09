import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {STORAGE, ROUTES} from '../../constraints';
import {setData, retriveData} from '../../storage/async';

export default function Cart() {
  const [cart, setCart] = useState();

  async function retCart() {
    let olderItems = await retriveData(STORAGE.CART);
    setCart(olderItems);
  }
  useEffect(() => {
    retCart();
  }, []);

  return (
    <View>
      <Text>cart</Text>
    </View>
  );
}
