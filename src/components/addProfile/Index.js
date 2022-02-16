import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const InputData = ({label, placeholder}) => {
  return (
    <>
      <Text style={styles.labelForm}>Full name</Text>
      <TextInput
        style={styles.inputForm}
        placeholder="Full your name"
        onChangeText={this.onChangeText}
        value={name}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default InputData;
