import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>
          PENERAPAN APLIKASI ABSENSI KARYAWAN PADA PT. MULTI SAHABAT
          ABADI BERBASIS ANDROID
        </Text>
        <Text style={styles.textContent}>
                  Karyawan merupakan asset perusahaan yang sangat penting dan dibutuhkan
          dalam sebuah perusahaan tujuan untuk mencapai suatu tujuan yang sudah
          ditetapkan tersebut. Dan untuk penempatan karyawan disuatu tempat
          harus sesuai dengan skil atau keahlian dan pengetahuan yang dikuasai
          oleh karyawan tersebut begitupula dengan jumlah kerjaan yang sudah
          diberikan kepada karyawan haruslah sesuai dengan denag besarnya
          kapasitapekerjaan sehingga untuk penyelesaian suatu pekerjaan baik itu
          dari segi kualitas, kuantitas, waktu serta biaya seuaidenga angsuran
          yang diharapkan. Sangat berbeda dengan sistem absensi online yang
          memiliki fungsoionalitas dan fitur canggih. Perusahaan dapat mengawasi
          dan mengetahui apa saja kinerja para karyawan dan tugas setiap
          individu serta berapa lama masing-masing tugas diselesaikan. Pada PT.
          Multi sahabat abadi ini penulis menemukan masalah yang dialami oleh
          setiap karyawan adalah dengan proses absensi manual yang berjalan di
          PT. Multi sahabat abadi saat ini yaitu dengan menggunakan kertas dan
          mesin fingerprint sangat tidak efesien dan mempersulit setiap karyawan
          yang kerja dilapangan atau di luar kantor karena apa bila karyawan
          masuk atau pulang kerja mereka harus datang kekantor pusat di PT.
          Multi sahabat abadi untuk melakukan absensi,untuk itu penulis tertarik
          untuk mengambil judul “PENERAPAN APLIKASI ABSENSI KARYAWAN PADA PT.
          MULTI SAHABAT ABADI BERBASIS ANDROID” penulis menyusulkan untuk
          membuat sebuah aplikasi absensi yang berebasis android untuk membantu
          karyawan-karyawan yang ada di PT. Multi sahabat abadi.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textHeader: {
    marginLeft: '5%',
    marginRight: '5%',
    fontSize: 20,
    textAlign: 'center',
    marginTop: '2%',
    color: '#000',
  },
  textContent: {
    fontSize: 16,
    marginLeft: '5%',
    marginRight: '5%',
    textAlign: 'justify',
    marginTop: '5%',
    color: '#000',
  },
});
