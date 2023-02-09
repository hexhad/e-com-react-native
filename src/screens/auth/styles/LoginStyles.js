import {StyleSheet, Text, View} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  mainTextWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: 40,
    marginBottom: 40,
  },
  mainText: {
    fontSize: 40,
  },
  inputBoxWrapper: {
    width: 300,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 5,
    marginVertical: 10,
  },
  inputBox: {
    color: '#808080',
  },
  buttonWrapper: {},
  button: {
    width: 300,
    marginTop: 30,
    backgroundColor: '#675bee',
    justifyContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
  },
  buttonWrapperB: {},
  buttonB: {
    width: 100,
    marginTop: 30,
    backgroundColor: '#B33F40',
    justifyContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 4,
  },
  buttonTextB: {
    color: '#fff',
  },
});
