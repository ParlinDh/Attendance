import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Absensi,
  Auth,
  CekIn,
  CekOut,
  Home,
  Profile,
  SplashScreen,
} from '../screens/index';
import ImagesPath from '../constants/ImagesPath';
import AddMaps from '../components/tambahCekIn/AddMaps';
import AddProfile from '../screens/profile/addProfile/Index';
import QrCode from '../components/corousel/QrCode';
import { About, Access, Help, History, Performance } from '../screens/profile/menuItem';
import UpdateUser from '../screens/profile/addProfile/updateUser';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          // tabBarShowLabel: false,
          tabBarActiveTintColor: '#3A92DD',
          tabBarInactiveTintColor: '#000000',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  tintColor: focused ? '#3A92DD' : '#000000',
                }}
                source={ImagesPath.icHome}
              />
            );
          },
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "white",
            borderRadius: 20,
            bottom: 10,
            marginHorizontal: 20,
          },
        }}
      />
      <Tab.Screen
        name="Absensi"
        component={Absensi}
        options={{
          headerShown: false,
          // tabBarShowLabel: false,
          tabBarActiveTintColor: '#3A92DD',
          tabBarInactiveTintColor: '#000000',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  tintColor: focused ? '#3A92DD' : '#000000',
                }}
                source={ImagesPath.icExplore}
              />
            );
          },
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "white",
            borderRadius: 20,
            bottom: 10,
            marginHorizontal: 20,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          // tabBarShowLabel: false,
          tabBarActiveTintColor: '#3A92DD',
          tabBarInactiveTintColor: '#000000',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  tintColor: focused ? '#3A92DD' : '#000000',
                }}
                source={ImagesPath.icProfile}
              />
            );
          },
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "white",
            borderRadius: 20,
            bottom: 10,
            marginHorizontal: 20,
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen name="CekIn" component={CekIn} />
      <Stack.Screen name="CekOut" component={CekOut} />
      <Stack.Screen name="Add Maps" component={AddMaps} />
      <Stack.Screen name="Your Profile" component={AddProfile} />
      <Stack.Screen name="Qr Code" component={QrCode} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Absensi" component={Absensi} />
      <Stack.Screen name="History Attendance" component={History} />
      <Stack.Screen name="Performance" component={Performance} />
      <Stack.Screen name="Access" component={Access} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Update User" component={UpdateUser} />
    </Stack.Navigator>
  );
};
export default Routes;
