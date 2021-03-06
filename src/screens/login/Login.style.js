import { StyleSheet } from 'react-native';

const INPUT_FONT_SIZE = 17;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F0EDFF',
    justifyContent: 'flex-end'
  },
  inputInfo: {
    width: '80%',
    height: 50,
    fontSize: INPUT_FONT_SIZE,
    borderBottomColor: '#A5A2D9',
    borderBottomWidth: 1,
  },
  inputPassword: {
    width: '80%',
    height: 50,
    fontSize: INPUT_FONT_SIZE,
    marginTop: '5%',
    borderBottomColor: '#A5A2D9',
    borderBottomWidth: 1,
  },
  buttonLogin: {
    height: 43,
    width: '80%',
    marginTop: '5%',
    backgroundColor: '#A5A2D9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textLogin: {
    textAlign: 'center',
  },
  buttonLoginWithFB: {
    height: 43,
    width: '80%',
    marginTop: '3%',
    marginBottom: '10%',
    backgroundColor: '#4C68EA',
    justifyContent: 'center',
   alignItems: 'center',
    borderRadius: 10,
  },
  textLoginWithFB: {
    width: 300,
    textAlign: 'center',
  },
  textLoginWith: {
    marginTop: '3%'
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoIcon: {
    width: 85,
    height: 85
  }
});

export default styles;
