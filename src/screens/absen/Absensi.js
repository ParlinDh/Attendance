import { Text, StyleSheet, View, KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from './styles'
import moment from "moment";
import "moment/locale/id";


const date = new Date();

export default class Absensi extends Component {
  render() {
    return (
        <KeyboardAvoidingView style={styles.container}>
        <View style={styles.Header}>
          <Text style={styles.fontHeader}>C3 Church Global</Text>
          <Text style={styles.timeHeader}>{moment(date).format("HH : mm")}</Text>
          <Text style={styles.timeHeaderKet}>{moment(date).format("DLL")} </Text>
          <Text style={styles.fontHeaderKet}>
            Selamat Datang di Aplikasi Absensi {"\n"}Silahkan Cek-in Sebelum Anda{" "}
            {"\n"}
            Mulai Bekerja
          </Text>
        </View>
        <View style={styles.Body}>
          <TouchableOpacity
            style={styles.btnCekIn}
            onPress={() => this.props.navigation.navigate("CekIn")}
          >
            <Text style={styles.textBtnIn}>Absensi Masuk</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnCekOut}
            onPress={() => this.props.navigation.navigate("CekOut")}
          >
            <Text style={styles.textBtnOut}>Absensi Keluar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}
