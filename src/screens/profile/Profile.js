import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import styles from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleRight,
  faB,
  faBarcode,
  faBold,
  faBolt,
  faCircleInfo,
  faCircleQuestion,
  faEdit,
  faNoteSticky,
  faQuestion,
  faRectangleList,
  faUniversalAccess,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import {getAuth} from 'firebase/auth';
import {getDatabase, ref, onValue} from 'firebase/database';


export default class Profile extends Component {

  render() {
    const auth = getAuth();
    
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerShow}>
            <FontAwesomeIcon
              style={styles.iconUser}
              icon={faUserCircle}
              size={45}
              color="#ffffff"
            />
            <Text style={styles.textHeaderShow}>
              {/* {auth.currentUser?.displayName} {'\n'} */}
              {auth.currentUser?.email} 
            </Text>
            {/* <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Your Profile')}>
              <FontAwesomeIcon icon={faEdit} size={20} color="#fff" />
            </TouchableOpacity> */}
          </View>
          <Text style={styles.headerBan}></Text>
        </View>
        {/* <View style={styles.qrCode}>
          <TouchableOpacity style={styles.btnBarcode} onPress={alert}>
            <FontAwesomeIcon
              style={styles.iconBarcode}
              size={28}
              icon={faBarcode}
            />
            <Text style={styles.textBarcode}>Show Barcode</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.listMenu1}>
          <TouchableOpacity
            style={styles.btnListMenu1}
            onPress={() =>
              this.props.navigation.navigate('History Attendance')
            }>
            <FontAwesomeIcon icon={faRectangleList} size={25} color="#3A92DD" />
            <Text style={styles.textListMenu01}>History Attendance</Text>
            <FontAwesomeIcon icon={faAngleRight} size={25} color="#3A92DD" />
          </TouchableOpacity>
        </View>
        <View style={styles.listMenu1}>
          <TouchableOpacity
            style={styles.btnListMenu1}
            onPress={() => this.props.navigation.navigate('Performance')}>
            <FontAwesomeIcon icon={faBolt} size={25} color="#3A92DD" />
            <Text style={styles.textListMenu01}>Performance </Text>
            <FontAwesomeIcon
              style={{marginLeft: 30}}
              icon={faAngleRight}
              size={25}
              color="#3A92DD"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.listMenu1}>
          <TouchableOpacity
            style={styles.btnListMenu1}
            onPress={() => this.props.navigation.navigate('Access')}>
            <FontAwesomeIcon
              icon={faUniversalAccess}
              size={25}
              color="#3A92DD"
            />
            <Text style={styles.textListMenu01}>Access </Text>
            <FontAwesomeIcon
              style={{marginLeft: '18%'}}
              icon={faAngleRight}
              size={25}
              color="#3A92DD"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.listMenu1}>
          <TouchableOpacity
            style={styles.btnListMenu1}
            onPress={() => this.props.navigation.navigate('Help')}>
            <FontAwesomeIcon
              icon={faCircleQuestion}
              size={25}
              color="#3A92DD"
            />
            <Text style={styles.textListMenu01}>Help </Text>
            <FontAwesomeIcon
              style={{marginLeft: '22%'}}
              icon={faAngleRight}
              size={25}
              color="#3A92DD"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.listMenu1}>
          <TouchableOpacity
            style={styles.btnListMenu1}
            onPress={() => this.props.navigation.navigate('About')}>
            <FontAwesomeIcon icon={faCircleInfo} size={25} color="#3A92DD" />
            <Text style={styles.textListMenu01}>About </Text>
            <FontAwesomeIcon
              style={{marginLeft: '20%'}}
              icon={faAngleRight}
              size={25}
              color="#3A92DD"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.btnSignOut}
          onPress={() => this.props.navigation.navigate('Auth')}>
          <Text style={styles.textBtnSignOut}>SIGN OUT</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.btnSignOut} onPress={handleSignOut}>
        <Text style={styles.textBtnSignOut}>SIGN OUT</Text>
      </TouchableOpacity> */}
        <Text style={{color: '#000', textAlign: 'center', marginTop: 10}}>
          Version 1.0.0
        </Text>
      </KeyboardAvoidingView>
    );
  }
}
