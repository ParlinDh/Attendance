import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import MapView, {Callout, Circle, Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export default function AddMaps() {
  const [pin, setPin] = React.useState({
    latitude: -6.1164355,
    longitude: 106.7896404,
  });
  return (
    <KeyboardAvoidingView style={styles.container}>
        <View>
            <TextInput placeholder='Address'/>
        </View>
        <View>
            <TextInput placeholder='Kecamatan'/>
        </View>
        <View>
            <TextInput placeholder='Kelurahan'/>
        </View>
      <View styles={{backgroundColor: 'black', marginTop: '90%'}} >
          <Text>TLake</Text>
        <GooglePlacesAutocomplete
          placeholder="Searching"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyCzLLvgvB1be9OoJE4I_eaZCr1b4aR-bYo',
            language: 'en',
          }}
          styles={{
            container: {flex: 0, Position:"relative", width: "100%", zIndex: 1},
            listView: {backgroundColor: "transparent"}
          }
          }
        />
      </View>

      <View style={styles.viewMap}>
        <MapView
          style={styles.Map}
          initialRegion={{
            latitude: -6.1164355,
            longitude: 106.7896404,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          provider="google">
          <Marker
            coordinate={pin}
            pinColor="red"
            draggable={true}
            onDragStart={e => {
              console.log('Drag Start', e.nativeEvent.coordinates);
            }}
            onDragEnd={e => {
              setPin({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
            }}>
            <Callout>
              <Text style={{color: '#000'}}>My Location</Text>
            </Callout>
          </Marker>
          <Circle center={pin} radius={1000} />
        </MapView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#2e74b0',
    backgroundColor: '#000',
  },
  viewMap: {
    ...StyleSheet.absoluteFillObject,
    Height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '80%',
    // flex: 1,
    // borderWidth: 1,
  },
  Map: {
    ...StyleSheet.absoluteFillObject,
  },
});
