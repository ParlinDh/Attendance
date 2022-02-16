import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, ImageBackground, Animated} from 'react-native';
import ImagesPath from '../../constants/ImagesPath';

const SplashScreen = ({navigation}) => {
  useEffect(()=>{
      setTimeout(()=>{
          navigation.replace('Auth')
      },3000)
  },[navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={ImagesPath.icSplashImages}
        style={styles.ImageBackground}
      />
      <Text style={styles.Text}>C3 Church Global</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  ImageBackground: {
    width: 300,
    height: 300,
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000'
  },
});

export default SplashScreen;
