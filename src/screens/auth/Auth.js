import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import styles from './styles';
import {Home} from '../index';
import ImagesPath from '../../constants/ImagesPath';
import FIREBASE, {authentication} from '../../constants/FIREBASE';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigation } from '@react-navigation/core';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Auth = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged(user =>{
      if(user){
        navigation.navigate("MainApp")
      }
    });
    return unsubscribe
  },[]);
  
   const handleSignUp = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('Registered With :', user.email);
      })
      .catch(err =>alert(err.message))
    };
    
    const SignInUser =  ({navigation}) => {
    signInWithEmailAndPassword(authentication, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user.email);
      })
      .catch(err =>alert(err.message))
  };

  // const SignInUser = async() =>{
  //   try {
  //     const value = await AsyncStorage.getItem('username', 'password')
  //   } catch (error) {
      
  //   }
  // }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={ImagesPath.icHumans01} style={styles.Image} />
      <Text style={styles.Text}>Please login to get started</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnLine} onPress={handleSignUp}>
          <Text style={styles.btnTextLine}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={SignInUser}>
          <Text style={styles.btnText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;
