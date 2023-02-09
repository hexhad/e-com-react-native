import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useEffect, useState, useMemo} from 'react';
import {STORAGE, ROUTES} from '../../constraints';
import {setData, retriveData} from '../../storage/async';
import {Cart as styles} from './styles';
import {useIsFocused} from '@react-navigation/native';

export default function Cart() {
  const [cart, setCart] = useState();

  const isFocused = useIsFocused();

  async function retCart() {
    let olderItems = await retriveData(STORAGE.CART);
    if (!!olderItems) {
      setCart(Object.values(olderItems));
    }
    
  }

  async function deleteItem(prop) {
    console.log(prop);
    let olderItems = await retriveData(STORAGE.CART);
    let deleted = delete olderItems[prop];

    if (deleted) {
      console.log();
      await setData(STORAGE.CART, olderItems);
      setCart(olderItems);
    }
  }
  useEffect(() => {
    retCart();
  }, [isFocused]);

  const renderProducts = useMemo(() => {
    return (
      <FlatList
        data={cart}
        ItemSeparatorComponent={<View style={styles.seperator}></View>}
        renderItem={({item}) => {
          return (
            <View style={styles.cardContainer}>
              <View style={styles.imageWrapper}>
                <Image style={styles.image} source={{uri: item.image}} />
              </View>
              <View style={styles.middle}>
                <View style={styles.row}>
                  <Text>{item.title}</Text>
                </View>
                <View style={styles.row}>
                  <View>
                    <Text>Quentity {item.qty}</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={styles.delete}
                      onPress={() => deleteItem(item.id)}>
                      <Text style={styles.deleteText}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.price}>
                <Text>{item.price} $</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    );
  }, [cart]);

  return <View>{renderProducts}</View>;
}
