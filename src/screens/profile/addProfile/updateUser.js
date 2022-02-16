//import liraries
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './styles';
import {getAuth, updateProfile} from 'firebase/auth';

// create a component
const UpdateUser = () => {
  const auth = getAuth();
  updateProfile(auth.currentUser, {
    displayName: 'Jane Q. User',
    photoURL: 'https://example.com/jane-q-user/profile.jpg',
  })
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch(error => {
      // An error occurred
      // ...
    });
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
          <TextInput style={styles.inputForm} placeholder="Full your name" />
        </View>
        <View style={styles.form}>
          <Text style={styles.labelForm}>Phone Number</Text>
          <TextInput
            style={styles.inputForm}
            placeholder="+62 856 - 3476 - 8754"
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.labelForm}>Address</Text>
          <TextInput style={styles.inputForm} placeholder="Address..." />
        </View>
        <TouchableOpacity style={styles.btnSave}>
          <Text style={styles.textBtnSave}>Save</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default UpdateUser;
