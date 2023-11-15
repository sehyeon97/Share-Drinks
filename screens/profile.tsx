import React from 'react-native';
import {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  Pressable,
} from 'react-native';
// import defaultImage from '../assets/default.jpg';

const Profile = () => {
  const test = 'React Native';
  // const [image, setImage] = useState(defaultImage);
  const [username, setUsername] = useState(test);
  const [email, setEmail] = useState('Starbucks@gmail.com');
  const [tempEmail, setTempEmail] = useState(email);

  return (
    <View style={styles.container}>
      {/* <Image style={styles.logo} source={image}></Image> */}
      <Text style={styles.title}>My Name</Text>
      <Text style={styles.text}>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
      />
      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTempEmail}
        placeholder={email}
      />
      <Pressable
        style={styles.button}
        onPress={() => changeEmail(setEmail, tempEmail, email)}>
        <Text style={styles.submit}>Change Email</Text>
      </Pressable>
    </View>
  );
};

function changeEmail(setEmail: any, tempEmail: string, _email: string) {
  if (tempEmail.match(validEmail)) {
    setEmail(tempEmail);
  }
}

const validEmail =
  /(^[A-Za-z0-9])([A-Za-z0-9+_.-]){0,}([A-Za-z0-9])@((gmail|yahoo|hotmail)\.com)\b/;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: height,
    padding: 20,
    backgroundColor: 'peachpuff',
  },
  title: {
    height: 100,
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20,
  },
  logo: {
    width: width / 2,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 50,
  },
  input: {
    height: 50,
    width: width * 0.9,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    textAlign: 'center',
    marginBottom: 40,
    backgroundColor: 'aliceblue',
  },
  text: {
    width: width * 0.9,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'cornflowerblue',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: -35,
  },
  submit: {
    fontWeight: 'bold',
  },
});

export default Profile;
