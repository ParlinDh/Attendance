import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   justifyContent: "center",
    //   alignItems: "center",
    backgroundColor: "#ffffff",
  },
  Header: {
    backgroundColor: "#3A92DD",
    alignItems: "center",
    height: "50%",
  },
  fontHeader: {
    color: "#FFFFFF",
    marginTop: "20%",
    fontSize: 30,
    fontWeight: "bold",
  },
  fontHeaderKet: {
    color: "#ffffff",
    marginTop: "15%",
    fontSize: 18,
    textAlign: "center",
  },
  dateTime:{
      justifyContent: 'center',
      alignItems: 'center',
  },
  timeHeader: {
    color: "#ffffff",
    fontSize: 30,
    marginTop: "10%",
    justifyContent: 'center'
  },
  timeHeaderKet:{
      color: '#ffffff'
  },
  Body: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  btnCekIn: {
    backgroundColor: "#2e74b0",
    height: 40,
    width: "80%",
    borderRadius: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textBtnIn: {
    color: "#f3f6f4",
    fontSize: 18,
    fontWeight: "bold",
  },
  textBtnOut: {
    color: "#2e74b0",
    fontSize: 18,
    fontWeight: "bold",
  },
  btnCekOut: {
    backgroundColor: "#f3f6f4",
    height: 40,
    width: "80%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#2e74b0",
    borderWidth: 1,
  },
});

export default styles;
