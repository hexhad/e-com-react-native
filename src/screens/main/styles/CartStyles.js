import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
  },
  seperator: {
    backgroundColor: '#808080',
    width: '80%',
    height: 3,
    marginHorizontal: '10%',
    borderRadius: 50,
  },
  cardContainer: {
    flexDirection: 'row',
    marginHorizontal:20
  },
  imageWrapper: {
    width: 90,
    height: 90,
  },
  image: {
    width: 70,
    height: 70,
    margin:10,
    resizeMode:'cover'
  },
  middle: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  delete: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  deleteText: {
    color: 'red',
    marginLeft:10
  },
  price: {
    marginLeft: 'auto',
    justifyContent: 'center',
  },
});
