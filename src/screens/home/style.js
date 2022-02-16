import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#ffff',
    height: '100%'
  },

  texLogo:{
  // backgroundColor: '#3A92DD',
  color: '#fff',
  marginLeft: '5%',
  marginTop: 20,
  fontSize: 24,
  fontWeight: 'bold'
  },

  // Header
  TextUserName: {
    color: '#fff',
    marginLeft: '5%',
    marginTop: '8%',
  },
  iconUser: {
    marginLeft: '40%',
    marginTop: '10%',
  },
  header: {
    flexDirection: 'row',
  },
  headerContainer: {
    height: '20%',
    backgroundColor: '#3A92DD',
  },

  // Banner
  Banner: {
    backgroundColor: '#3A92DD',
    height: '30%',
    width: '100%',
    borderRadius: 20,
  },

  // Calender
  textCalender:{
    color: 'grey',
    marginTop: 15,
    marginLeft: '5%',
    fontWeight: 'bold',
    fontSize: 20

  },
  calender:{
    height: '50%',
    marginTop: 20,
    backgroundColor: '#ffffff'
  },

  // Slider
  textSlider:{
    color: 'grey',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: '5%',
    fontWeight: 'bold',
    fontSize: 20
  },
  slider:{
    // backgroundColor: 'blue',
    height: '20%',
    marginTop: 20
  },
 
});

export default styles;
