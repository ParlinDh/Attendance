import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
  },
  inputContainer: {
    width: '80%',
  },
  Image: {
    width: '80%',
    height: '20%',
  },
  Text: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#79A3B1',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 5,
    color: '#000000',
  },

  btnContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    flexDirection: 'row',
  },

  btn: {
    backgroundColor: '#0782F9',
    width: '40%',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },

  btnLine: {
    backgroundColor: '#FFFFFF',
    borderColor: '#0782F9',
    borderWidth: 1,
    width: '40%',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginRight: 5,
  },

  btnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  btnTextLine: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default styles;
