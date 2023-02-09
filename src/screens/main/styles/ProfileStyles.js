import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    width: '80%',
    height:'90%',
    marginHorizontal: '10%',
  },
  profilImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: '#000',
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 25,
  },
  bold: {
    fontWeight: 'bold',
    marginLeft: 3,
  },
  normalText: {
    marginLeft: 10,
  },
  logout: {
    width: '70%',
    marginHorizontal: '15%',
    backgroundColor: '#675bee',
    justifyContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 4,
  },
  logoutText: {
    color: '#fff',
  },
  bottomCont: {
    marginTop: 'auto',
    justifyContent: 'flex-end',
  },
});
