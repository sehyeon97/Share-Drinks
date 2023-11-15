import {useState} from 'react';
import React from 'react-native';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
// import splashLogo from '../assets/rnCoffee.jpeg';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState('user@email.com');
  const [password, setPassword] = useState('Password');
  // const splashLogoUri = Image.resolveAssetSource(splashLogo).uri;
  return (
    <View>
      <Image style={styles.image} source={require('../assets/rnCoffee.jpeg')} />
      <Text style={styles.titleText}>Login</Text>

      <View style={styles.form}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder={email}
            placeholderTextColor="#003f5c"
            onChangeText={newEmail => setEmail(newEmail)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder={password}
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={newPassword => setPassword(newPassword)}
          />
        </View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('FavoritesTab')}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },

  form: {
    marginTop: 100,
  },

  image: {
    width: 250,
    height: 250,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 50,
  },

  titleText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 40,
  },

  inputView: {
    backgroundColor: '#c4c4c4',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },

  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#6363ff',
    alignSelf: 'center',
  },

  loginText: {
    fontWeight: 'bold',
  },
});

export default Login;
