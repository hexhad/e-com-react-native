import {View, Text, TouchableOpacity, Image, ToastAndroid} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {useRoute, useIsFocused} from '@react-navigation/native';
import Star from 'react-native-star-view';
import Slider from '@react-native-community/slider';

import {getProduct} from '../../api/main';
import {MoreInfo as styles} from './styles';
import {RNCarousel} from 'react-native-carousel-cards';

import { STORAGE, ROUTES } from '../../constraints';
import { setData, retriveData } from '../../storage/async';

export default function MoreInfo(props) {
  const {navigation} = props;
  const route = useRoute();

  const [itemData, setItemData] = useState([]);
  const [imageSet, setImageSet] = useState([]);
  const [quentity, setQuentity] = useState(1);

  async function getOneProduct() {
    let list = await getProduct(route.params.itemId);
    if (!!list) {
      setItemData(list);
      let preProcessed = list.images.map(e => ({url: e}));
      setImageSet(preProcessed);
    }
  }

  async function addItemToCart() {

    const cartData  = {
      id: itemData.id,
      image: itemData.images[0],
      qty: quentity,
      title: itemData.title,
      price: itemData.price,
      total:quentity*itemData.price
    };

    if (!!imageSet[0]?.url) {
      let olderItems = await retriveData(STORAGE.CART);
      if (!!olderItems) {
        console.log("AVAILABLE");
        if (!!olderItems[itemData.id]) {
          console.log("CURRENT ONE");
       
            ToastAndroid.showWithGravity(
              'Already in Cart',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
            if (navigation.canGoBack()) {
              navigation.goBack();
            }
        }else{
          let appending = {...olderItems,[itemData.id]:cartData}
          await setData(STORAGE.CART,appending);
        }
      } else {
        console.log("CART IS EMPTY ");
        await setData(STORAGE.CART,{[itemData.id]:cartData});
      }
      // if
      // await setData(STORAGE.CART, );
      // navigation.navigate(ROUTES.HOME);
    } else {
      console.log("INVALID");
    }
    
    
  }


  useEffect(() => {
    getOneProduct();
  }, []);

  const itemSection = useMemo(() => {
    console.log('imageSet', !!imageSet[0]?.src);
    return (
      <View style={[styles.container, styles.centerContent]}>
        <View>
          <View style={styles.image}>
            {!!imageSet[0]?.url ? (
              <RNCarousel data={imageSet} />
            ) : (
              <View></View>
            )}
          </View>
        </View>

        <View style={styles.alignLeft}>
          <View>
            <Text>{itemData.brand}</Text>
          </View>
          <View>
            <Text>{itemData.description}</Text>
          </View>
          <View style={styles.row}>
            <Text>Price</Text>
            <View style={styles.dragtoRight}>
              <Text>{itemData.price}$</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text>Feedback</Text>
            <View style={styles.dragtoRight} >
              <Star score={itemData.rating || 0} style={styles.icon}/>
            </View>
          </View>
        </View>
      </View>
    );
  }, [imageSet]);

  const bottomContent = useMemo(() => {
    return (
      <View>
        <View style={[styles.row,{justifyContent:'center',alignItems:'center'}]}>
          <Text>1</Text>
          <Slider
            minimumValue={1}
            maximumValue={itemData?.stock || 10}
            minimumTrackTintColor={'#675bee'}
            maximumTrackTintColor={'#675bee'}
            onSlidingComplete={e => setQuentity(parseInt(e))}
            thumbTintColor="#675bee"
            style={[styles.slider,{marginBottom:15}]}
            step={1}
            trackStyle={{height: 20, backgroundColor: 'transparent'}}
            thumbStyle={{
              height: 20,
              width: 20,
              backgroundColor: 'transparent',
            }}
          />
          <Text>{itemData?.stock}</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={addItemToCart}>
            <Text style={styles.buttonText}>Add to Cart ({quentity})</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }, [imageSet,quentity]);

  return (
    <View style={[styles.container, styles.centerContent]}>
      {!!imageSet[0]?.url? (
        itemSection
      ) : (
        <View>
          <Text>Loading</Text>
        </View>
      )}
      <View>
        {!!imageSet[0]?.url&&bottomContent}
      </View>
    </View>
  );
}
