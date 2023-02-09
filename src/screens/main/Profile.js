import {View, Image, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {PhoneCall, Camera, Lock, PlayCircle, Book, Activity} from 'react-native-feather';

import {STORAGE, ROUTES} from '../../constraints';
import {getUser} from '../../api/main';
import {useIsFocused} from '@react-navigation/native';
import {setData, retriveData} from '../../storage/async';
import {Profile as styles} from './styles';

export default function Profile(props) {
  const [user, setUser] = useState();
  const isFocused = useIsFocused();

  async function getUserDetails() {
    let userId = await retriveData(STORAGE.USER);
    let user = await getUser(userId);
    setUser(user);
  }

  async function logOut() {
    await setData(STORAGE.USER,"");
    await setData(STORAGE.CART,"");
    navigation.navigate(ROUTES.LOGIN);
  }

  useEffect(() => {
    getUserDetails();
  }, [isFocused]);
  const {navigation} = props;

  const renderProfile = useMemo(() => {
    return (
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image source={{uri: user?.image}} style={styles.profilImage} />
        </View>
        <View style={styles.row}>
          <Camera width={20} height={20} stroke="#000" />
          <Text style={styles.normalText}>Birth date </Text>
          <Text style={styles.bold}>{user?.birthDate}</Text>
        </View>
        <View style={styles.row}>
          <Lock width={20} height={20} stroke="#000" />
          <Text style={styles.bold}>{user?.gender}</Text>
        </View>
        <View style={styles.row}>
          <PhoneCall width={20} height={20} stroke="#000" />
          <Text style={styles.normalText}>Contact </Text>
          <Text style={styles.bold}>{user?.ein}</Text>
        </View>
        <View style={styles.row}>
          <Book width={20} height={20} stroke="#000" />
          <Text style={styles.normalText}>Studies at </Text>
          <Text style={styles.bold}>{user?.university}</Text>
        </View>
        <View style={styles.row}>
          <PhoneCall width={20} height={20} stroke="#000" />
          <Text style={styles.normalText}>From</Text>
          <Text style={styles.bold}>{user?.address?.address}</Text>
        </View>
        <View style={styles.row}>
          <Activity width={20} height={20} stroke="#000" />
          <Text style={styles.normalText}>Works at </Text>
          <Text style={styles.bold}>{user?.company?.name}</Text>
        </View>
        <View style={styles.row}>
          <PlayCircle width={20} height={20} stroke="#000" />
          <Text style={styles.normalText}>Work as a </Text>
          <Text style={styles.bold}>{user?.company?.title}</Text>
        </View>
        <View style={styles.bottomCont}>
          <TouchableOpacity
            style={styles.logout}
            onPress={logOut}>
            <Text style={styles.logoutText}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }, [user]);
  return <View>{!!user?.image && renderProfile}</View>;
}
