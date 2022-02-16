import {faAlignJustify} from '@fortawesome/free-solid-svg-icons';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
    color: '#000000',
    marginLeft: 19,
  },
  labelDate: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
    color: '#000000',
    marginLeft: 19,
  },
  labelHour: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
    color: '#000000',
    marginLeft: 19,
  },
 
  TextInput: {
    borderWidth: 1,
    borderColor: '#737373',
    // borderRadius: 20,
    padding: 5,
    paddingHorizontal: 15,
    width: '90%',
    marginLeft: '5%',
    height: 40,
    borderColor: 'transparent',
    borderRadius: 20,
    color: '#fff',
    backgroundColor: '#2e74b0',
  },
 
  dateInputDate: {
    flexDirection: 'row',
    borderWidth: 1,
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#2e74b0',
    height: 40,
    borderColor: 'transparent',
    borderRadius: 20
  },
  btnDate: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '48%',
  },
  dateInputHour: {
    flexDirection: 'row',
    borderWidth: 1,
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#2e74b0',
    height: 40,
    borderColor: 'transparent',
    borderRadius: 20
  },
  btnHour: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '61%',
  },
//   Input Location
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

//   Input Position
labelPosition: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
    color: '#000000',
    marginLeft: 19,
  },
  selectPicker: {
    borderWidth: 1,
    backgroundColor: '#2e74b0',
    width: '90%',
    marginLeft: '5%',
    height: 40,
    borderColor: 'transparent',
    borderRadius: 20,
    justifyContent: 'center',
  },
  //   Input Position

  
});

export default styles;
