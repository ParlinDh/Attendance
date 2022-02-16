import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import styles from './styles';
import {authentication} from '../../../../firebase/firebase';
import {getApp} from 'firebase/app';
import {getAdditionalUserInfo} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';

export default class AddProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      address: '',
    };
  }
  handleName = text => {
    this.setState({
      name: text,
    });
  };
  handlePhone = text => {
    this.setState({
      phone: text,
    });
  };
  handleAddress = text => {
    this.setState({
      address: text,
    });
  };

  onSubmit = (name, phone, address) => {
    if (name && phone && address) {
      // console.log(this.state)
      const db = getDatabase();
      set(ref(db, 'kontak/'), {
        name: name,
        phone: phone,
        address: address,
      })
        .then((data) => {
          // Data saved successfully!
          Alert.alert('Success', 'created success');
          this.props.navigation.replace('Profile')
        })
        .catch(error => {
          // The write failed...
          Alert.alert('error', 'Failed');
        });
    } else {
      Alert.alert('Error', 'column cannot be empty');
    }
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.userProfile}>
            <TouchableOpacity style={styles.btnUserProfile}>
              <FontAwesomeIcon
                style={styles.iconUser}
                icon={faCircleUser}
                size={100}
                color="#ffffff"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.form}>
            <Text style={styles.labelForm}>Full name</Text>
            <TextInput
              style={styles.inputForm}
              placeholder="Full your name"
              onChangeText={this.handleName}
            />
          </View>
          <View style={styles.form}>
            <Text style={styles.labelForm}>Phone Number</Text>
            <TextInput
              style={styles.inputForm}
              placeholder="+62 856 - 3476 - 8754"
              keyboardType="number-pad"
              onChangeText={this.handlePhone}
            />
          </View>
          <View style={styles.form}>
            <Text style={styles.labelForm}>Address</Text>
            <TextInput
              style={styles.inputForm}
              placeholder="Address..."
              onChangeText={this.handleAddress}
            />
          </View>
          <TouchableOpacity
            style={styles.btnSave}
            onPress={() =>
              this.onSubmit(
                this.state.name,
                this.state.phone,
                this.state.address,
              )
            }>
            <Text style={styles.textBtnSave}>Save</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
