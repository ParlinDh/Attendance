import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#2e74b0',
  },
  card: {
    // backgroundColor: '#2e74b0',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    height: '90%',
    width: '100%',
  },
  textHeader: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: '26%',
    marginBottom: 10,
  },
  btnSave: {
    borderWidth: 1,
    width: '95%',
    marginLeft: '2%',
    backgroundColor: '#2e74b0',
    height: '10%',
    borderColor: 'transparent',
    borderRadius: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBtnSave: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  labelLocation: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
    color: '#000000',
    marginLeft: 19,
  },
inputLocation: {
    flexDirection: 'row',
    borderWidth: 1,
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#2e74b0',
    height: 40,
    borderColor: 'transparent',
    borderRadius: 20
},
inputLocationTag: {
    marginLeft: '5%'
},
btnLocation: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '38%',
},
//   End Input Location
form:{
  marginLeft:'2%'
},

label:{
  color: '#000',
  marginBottom: 5,
  fontSize: 18

},
textInput:{
  // borderWidth: 1,
  backgroundColor: '#2e74b0',
  borderRadius: 10,
  width: '98%',
},
});

export default styles;
