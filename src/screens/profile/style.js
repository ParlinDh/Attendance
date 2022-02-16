import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    header:{
        backgroundColor: '#3A92DD',
        height: '15%',
        marginBottom: '10%'
    },
    headerShow:{
        flexDirection: 'row',
        marginTop: '5%',
        borderRadius: 30,
        alignItems: 'center',
        marginTop: '10%'
    },
    textHeaderShow:{
        fontSize: 20,
        marginLeft: 10,
        marginRight: '35%',
        fontWeight: 'bold',
        color: '#fff'
    },
    headerBan:{
        backgroundColor: '#3A92DD',
        height: 40,
        width: '100%',
        borderRadius: 30,
    },
    iconUser:{
        marginLeft: 15,
        alignItems: 'center'
    },

    //  QR COde
    qrCode:{
        width: '75%',
        height: '7%',
        marginLeft: '12%',
        borderRadius: 10 ,
        borderWidth: 1,
        borderColor: '#3A92DD',
        backgroundColor: '#fff'
    },
    btnBarcode:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    textBarcode:{
        color: '#000',
        marginRight: 10,
        marginLeft: 20,
        marginTop: 3,
        fontSize: 18
    },

    // List Menu
    listMenu1:{
        marginTop: '10%',

    },
    btnListMenu1:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '5%',
    },
    textListMenu01:{
        marginLeft: '5%',
        marginRight: '40%',
        color: '#000'
    },

    // btnSignOut
    btnSignOut:{
        backgroundColor: '#3A92DD',
        marginTop: '15%',
        width: '80%',
        height: '5%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',

        marginLeft: '10%'
    },
    textBtnSignOut:{
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16
    }
    
});

export default styles;