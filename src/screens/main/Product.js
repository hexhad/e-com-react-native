import {View} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {getProduct} from '../../api/main';
import {FlatList} from 'react-native';
import {ROUTES} from '../../constraints';
import {Card, Header} from '../utils';
import {Products as styles} from './styles';

export default function Product(props) {
  const {navigation} = props;
  const [productList, setProductList] = useState([]);

  const isFocused = useIsFocused();

  async function getAllProducts() {
    let list = await getProduct();
    if (!!list?.products) {
      setProductList(list.products);
    }
  }

  useEffect(() => {
    console.log(isFocused);
    getAllProducts();
  }, [isFocused]);

  const renderProducts = useMemo(() => {
    return (
      <FlatList
        data={productList}
        renderItem={item => (
          <Card
            {...item}
            onPress={() => {
              navigation.navigate(ROUTES.MORE_INFO, {
                itemId: item.item.id,
              });
            }}
          />
        )}
        keyExtractor={item => item.id}
      />
    );
  }, [productList]);

  return (
    <View style={styles.container}>
      <View>{productList && renderProducts}</View>
    </View>
  );
}
