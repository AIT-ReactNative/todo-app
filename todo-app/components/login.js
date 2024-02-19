import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Text,
} from 'react-native';
import Parse from 'parse/react-native';

import styles from '../styles/logInStyles';

const LogIn = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Add this line

  const handleLogin = async () => {
    try {
      const user = await Parse.User.logIn(username, password);
      console.log("Login successful");
      navigation.navigate('Task');
    } catch (error) {
      setError("Invalid credentials"); // Set an error message here
      console.error("Error: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image source={require('../assets/images/loginn.png')} style={styles.logo} />
        <View style={styles.account}>
          <Text style={styles.title}>Log In</Text>
          <View style={styles.inputConLogIn}>
            <TextInput
              style={[styles.input, { color: 'black' }]}
              placeholder="Enter your username"
              placeholderTextColor={'black'}
              value={username}
              onChangeText={text => setUsername(text)}
            />

            <TextInput
              style={[styles.input, { color: 'black' }]}
              placeholder="Enter your password"
              placeholderTextColor={'black'}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
            />

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity
              style={styles.customBotton}
              onPress={handleLogin}
            >
              <Text style={styles.textt}>Log In</Text>
            </TouchableOpacity>
            <View style={styles.signupContainer}>
              <Text style={styles.signText}>Don't have an account? </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
              >
                <Text style={[styles.signText, styles.signupLink]}>
                  SignUp Here
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LogIn;