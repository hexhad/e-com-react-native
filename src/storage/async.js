import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setData(key, value) {
  try {
    let str = JSON.stringify(value)
    await AsyncStorage.setItem(key, str);
    console.log('AsyncStorage SET', str);
  } catch (e) {
    console.warn('AsyncStorage SET :: ', e);
  }
}

export async function retriveData(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      let par = JSON.parse(value);
      console.log('AsyncStorage GET', par);
      return par;
    }
  } catch (e) {
    console.warn('AsyncStorage GET :: ', e);
    return null;
  }
}
