import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ROUTES, STORAGE} from '../../constraints';
import {postAuth} from '../../api/main';
import {setData} from '../../storage/async';
import {styles} from './styles/LoginStyles';

export default function LogIn(props) {
  const {navigation} = props;

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  async function validateApiCall() {
    const {token, id} = await postAuth({
      username: userName,
      password: password,
    });

    if (!!token) {
      await setData(STORAGE.USER, id);
      await setData(STORAGE.TOKEN, token);
      navigation.navigate(ROUTES.HOME);
    } else {
      console.log('INVALID');
    }
  }

  async function backDoor() {
    const {token, id} = await postAuth({
      username: 'kminchelle',
      password: '0lelplR',
    });

    if (!!token) {
      await setData(STORAGE.USER, id);
      await setData(STORAGE.TOKEN, token);
      navigation.navigate(ROUTES.HOME);
    } else {
      console.log('INVALID');
    }
  }

  useEffect(() => {
    // validateApiCall();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mainTextWrapper}>
        <Text style={styles.mainText}>Practical Test</Text>
      </View>
      <View style={styles.inputBoxWrapper}>
        <TextInput
          style={styles.inputBox}
          value={userName}
          placeholder={'username'}
          onChangeText={e => setUserName(e)}
        />
      </View>
      <View style={styles.inputBoxWrapper}>
        <TextInput
          style={styles.inputBox}
          value={password}
          placeholder={'username'}
          onChangeText={e => setPassword(e)}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={validateApiCall} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonWrapperB}>
        <TouchableOpacity onPress={backDoor} style={styles.buttonB}>
          <Text style={styles.buttonTextB}>Back Door</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
