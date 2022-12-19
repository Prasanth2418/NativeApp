import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [text, onChangeText] = useState();
  const [number, onChangeNumber] = useState(null);

  const Login = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <View style={styles.MainContainer}>
        <Image
          style={styles.tinyLogo3}
          source={{
            uri: 'https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000',
          }}
        />
      </View>

      <View style={{marginTop: 20}}>
        <Text style={{paddingLeft: 17, fontSize: 20,color:"black"}}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Enter your username"
          value={text}
        />
        <Text style={{paddingLeft: 17, fontSize: 20,color:"black"}}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter your password"
          secureTextEntry={true}
        />

        <TouchableOpacity activeOpacity={0.8}>
          <Text
            style={{
              textAlign: 'right',
              fontSize: 15,
              color: 'blue',
              paddingRight: 15,
            }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Login} activeOpacity={0.8}>
          <Text style={styles.button}>Login →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    margin: 0,
    padding: 0,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
  },
  container: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 25,
  },
  container2: {
    textAlign: 'center',
    fontSize: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'blue',
    width: 150,
    height: 50,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    color: 'white',
    marginTop: 15,
  },
  tinyLogo: {
    width: 120,
    height: 55,
    alignSelf: 'center',
    // marginTop:20
  },
  tinyLogo2: {
    width: 20,
    height: 25,
    alignSelf: 'center',
    marginTop: 10,
  },
  tinyLogo3: {
    width: 400,
    height: 350,
    alignSelf: 'center',
  },
  
});

export default LoginScreen;
