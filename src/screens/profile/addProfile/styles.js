import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3A92DD',
    },
    // content: {
        backgroundColor: '#fff',
    //     marginTop: 20,
    //     width: '90%',
    //     marginLeft: '5%',
    //     height: '80%',
    //     borderRadius: 20
    // } ,
    userProfile:{
        marginTop: '10%',
        alignItems: 'center'
    },
    btnUserProfile:{
        flexDirection: 'row'
    },
    iconUser:{
        marginBottom: '10%'
    },

    // Form
    form:{
        marginLeft: '5%',
        marginBottom: 5
    },
    labelForm:{
        fontSize: 16,
        marginBottom: '2%',
        marginLeft: '3%',
        color: '#fff'
    },
    inputForm:{
        borderWidth: 1,
        borderColor: '#fff',
        width: '95%',
        borderRadius: 20,
        paddingHorizontal: '3%'
    },

    // btn Save
    btnSave:{
        borderColor: '#fff' ,
        marginTop: 20,
        borderWidth: 1,
        width: '90%',
        height: '7%',
        marginLeft: '5%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15%'
    },
    textBtnSave:{
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20,

    }
  });

  export default styles