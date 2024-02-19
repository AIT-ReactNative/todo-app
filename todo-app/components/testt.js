import React, {useState} from 'react';
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
import 'react-native-get-random-values';

import styles from '../styles/logInStyles';

// Before using the SDK
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('kP3sNvRtx7zGvFbA1e9d', 'uYbGxJrWz1v4p7s0qXtZv3y6A9Dc8BfUjN1g4Kp7S2');
Parse.serverURL = 'http://192.168.100.62:1337/parse';

const Test = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    console.log('Signing up user...');
    const user = new Parse.User();
    user.set('username', username);
    user.set('password', password);

    try {
      await user.signUp();
      navigation.navigate('Task');
      console.log('Success!');
    } catch (error) {
      // Show the error message and let the user try again.
      setError('Error: ' + error.code + ' ' + error.message);
      return;
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
              style={[styles.input, {color: 'black'}]}
              placeholder="Create your username"
              placeholderTextColor={'black'}
              value={username}
              onChangeText={setUsername}
            />

            <TextInput
              style={[styles.input, {color: 'black'}]}
              placeholder="Enter your password"
              placeholderTextColor={'black'}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />

            <TextInput
              style={[styles.input, {color: 'black'}]}
              placeholder="Confirm your password"
              placeholderTextColor={'black'}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={true}
            />

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity
              style={styles.customBotton}
              onPress={handleSignup}>
              <Text style={styles.textt}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.signupContainer}>
              <Text style={styles.signText}>Do you have an account? </Text>

              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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

export default Test;