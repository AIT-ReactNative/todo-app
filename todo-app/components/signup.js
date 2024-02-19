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
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../styles/logInStyles';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize("kP3sNvRtx7zGvFbA1e9d", "uYbGxJrWz1v4p7s0qXtZv3y6A9Dc8BfUjN1g4Kp7S2");
Parse.serverURL = 'http://192.168.100.62:1337/parse';

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); 

  const user = new Parse.User();
  user.set("username", username);
  user.set("password", password);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    console.log("Signing up user...");
    try {
      await user.signUp();
      navigation.navigate('Task');
      console.log("Success!", user.id);
    } catch (error) {
      setError("Error signing up"); // Set an error message here
      console.error("Error: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image source={require('../assets/images/Sign_up.png')} style={styles.logo} />
        <View style={styles.account}>
          <Text style={styles.title}>Sign Up</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, { color: '#2F2E41' }]}
              placeholder="Create your username"
              placeholderTextColor={'#2F2E41'}
              value={username}
              onChangeText={setUsername}
            />

            <TextInput
              style={[styles.input, { color: '#2F2E41' }]}
              placeholder="Enter your password"
              placeholderTextColor={'#2F2E41'}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />

            <TextInput
              style={[styles.input, { color: '#2F2E41' }]}
              placeholder="Confirm your password"
              placeholderTextColor={'#2F2E41'}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={true}
            />

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity
              style={styles.customBotton}
              onPress={handleSignup}
            >
              <Text style={styles.textt}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.signupContainer}>
              <Text style={styles.signText}>Do you have an account? </Text>

              <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                <Text style={[styles.signText, styles.signupLink]}>
                  Login Here
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignUp;
