import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedbackBase,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  TextInput,  Alert,
} from 'react-native';
import React, {Component} from 'react';
import {AddCekIn} from '../../../components/Index';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {collection, addDoc} from 'firebase/firestore';
import {getDatabase, ref, set} from 'firebase/database';

export default class CekIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      position: '',
      date: '',
      time: '',
      location: '',
    };
  }
  handleName = text => {
    this.setState({
      name: text,
    });
  };
  handlePosition = text => {
    this.setState({
      position: text,
    });
  };
  handleDate = text => {
    this.setState({
      date: text,
    });
  };
  handleTime = text => {
    this.setState({
      time: text,
    });
  };
  handleLocation = text => {
    this.setState({
      location: text,
    });
  };

  // Submit
  onSubmit = (name, position, date, time, location) => {
    if (name && position && date && time && location) {
      const db = getDatabase();
      set(ref(db, 'Attendance/cekIn'), {
        name: name,
        position: position,
        date: date,
        time: time,
        location: location,
      })
        .then((data) => {
          // Data saved successfully!
          Alert.alert('Success', 'Your cek in success');
          this.props.navigation.replace('Absensi');
        })
        .catch(error => {
          // The write failed...
          Alert.alert('error', 'Failed');
        });
    }else {
      Alert.alert('Error', 'column cannot be empty');
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
       
        style={styles.container}>
        <TouchableWithoutFeedback >
          <View style={styles.card}>
            <Text style={styles.textHeader}>sign-in attendance</Text>
            <View style={styles.form}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                placeholder="full name"
                style={styles.textInput}
                onChangeText={this.handleName}
              />
            </View>
            <View style={styles.form}>
              <Text style={styles.label}>Position</Text>
              <TextInput
                placeholder="Your position"
                style={styles.textInput}
                onChangeText={this.handlePosition}
              />
            </View>
            <View style={styles.form}>
              <Text style={styles.label}>Check in Date</Text>
              <TextInput
                placeholder="2022-02-02"
                style={styles.textInput}
                onChangeText={this.handleDate}
              />
            </View>
            <View style={styles.form}>
              <Text style={styles.label}>Check in hours</Text>
              <TextInput
                placeholder="12 : 00"
                style={styles.textInput}
                onChangeText={this.handleTime}
              />
            </View>
            <View style={styles.form}>
              <Text style={styles.label}>Location</Text>
              <TextInput
                placeholder="Your location regional"
                style={styles.textInput}
                onChangeText={this.handleLocation}
              />
            </View>
            {/* <AddCekIn
              label="Name"
              placeholder="Create name"
              onChangeText={this.handleName}
            /> */}
            {/* <AddCekIn
              label="Position"
              isDropdown={true}
              onChangeText={this.handlePosition}
            />
            <AddCekIn isDatePicker={true} onChangeText={this.handleDate} />
            <AddCekIn isTimePicker={true} onChangeText={this.handleTime} />
            <Text style={styles.labelLocation}>Location</Text>
            <View style={styles.inputLocation}>
              <TextInput
                placeholder="Take your location"
                style={styles.inputLocationTag}
                onChangeText={this.handleLocation}
              />
              <TouchableOpacity
                style={styles.btnLocation}
                onPress={() => this.props.navigation.navigate('Add Maps')}>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size={20}
                  color={'#D3CACA'}
                />
              </TouchableOpacity>
            </View> */}
            <View
              style={{
                borderWidth: 0.5,
                marginTop: 15,
                width: '80%',
                marginLeft: '10%',
              }}></View>
            <TouchableOpacity
              style={styles.btnSave}
              onPress={() =>
                this.onSubmit(
                  this.state.name,
                  this.state.position,
                  this.state.date,
                  this.state.time,
                  this.state.location,
                )
              }>
              <Text style={styles.textBtnSave}>Save</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
