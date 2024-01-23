import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Text,
} from 'react-native';

import styles from '../styles/logInStyles';

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('R@r.com');
  const [password, setPassword] = useState('r');
  const [confirmPassword, setConfirmPassword] = useState('r');
  const [error, setError] = useState('');

    console.log('Signing up user...');

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image source={require('../assets/images/Checklist.png')} style={styles.logo} />
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
              onPress={() => navigation.navigate('Task')}
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
