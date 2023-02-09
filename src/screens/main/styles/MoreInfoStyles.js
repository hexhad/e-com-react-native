import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
  },
  centerContent: {
    justifyContent: 'center',
    // flex:1,
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    height: 200,
    width: '80%',
    borderRadius: 4,
    overflow: 'hidden',
  },
  alignLeft: {
    marginTop:20,
    width: '80%',
    alignContent: 'flex-start',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    marginTop:10
  },
  dragtoRight: {
    marginLeft: 'auto',
  },
  slider:{
    marginTop:20,
    width:'50%',
    // marginHorizontal:'10%'
  },
  button:{
    width:'70%',
    marginHorizontal:'15%',
    backgroundColor:'#675bee',
    justifyContent:'center',
    justifyContent: 'center',
    alignItems: 'center',
    height:45,
    borderRadius:4,
  },
  buttonText:{
    color:'#fff',
  },
  icon:{
    // backgroundColor:'#675bee',
  }
});
