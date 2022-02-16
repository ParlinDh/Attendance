import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleUser,  faMailBulk,  faPhone,  } from '@fortawesome/free-solid-svg-icons';

export default class Help extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
            <Text style={{fontWeight: 'bold', fontSize: 24, marginTop: 10, marginLeft: 20}}>What can we do for you ?</Text>
          <View style={styles.viewCard}>
            <FontAwesomeIcon style={styles.textCard} icon={faCircleUser } color='#fff'  size={25}/>
            <Text style={styles.textCard}>Ikrom</Text>
          </View>
          <View style={styles.viewCard}>
            <FontAwesomeIcon style={styles.textCard} icon={ faPhone } color='#fff'  size={25}/>
            <Text style={styles.textCard}>0878 - 8445 - 3944</Text>
          </View>
          <View style={styles.viewCard}>
            <FontAwesomeIcon style={styles.textCard} icon={ faMailBulk } color='#fff'  size={25}/>
            <Text style={styles.textCard}>ikromlanang@gmail.com</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    marginTop: '15%',
    borderWidth: 1,
    backgroundColor: '#3A92DD',
    width: '90%',
    height: '30%',
    borderRadius: 20
  },
  textCard:{
    fontSize: 20,
    marginLeft: '10%',
    fontWeight: 'bold'
  },
  viewCard:{
    flexDirection: 'row',
    marginTop: '5%'
  }

});
