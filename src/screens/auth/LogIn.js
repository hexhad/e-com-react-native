import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ROUTES, STORAGE} from '../../constraints';
import {postAuth} from '../../api/main';
import {setData} from '../../storage/async';

export default function LogIn(props) {
  const {navigation} = props;

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  async function validateApiCall() {
    const {token} = await postAuth({
      username: 'kminchelle',
      password: '0lelplR',
    });

    if (!!token) {
      await setData(STORAGE.TOKEN, token);
      navigation.navigate(ROUTES.HOME);
    } else {
      console.log("INVALID");
    }
  }

  useEffect(() => {
    // validateApiCall();
  }, []);

  return (
    <View>
      <Text>LogIn</Text>

      <TextInput
        value={userName}
        placeholder={'username'}
        onChangeText={e => setUserName(e)}
      />
      <TextInput
        value={password}
        placeholder={'username'}
        onChangeText={e => setPassword(e)}
      />

      <TouchableOpacity onPress={validateApiCall}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
