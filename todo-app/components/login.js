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

const LogIn = ({navigation}) => {
  const [username, setUsername] = useState('R@r.com');
  const [password, setPassword] = useState('r');
  const [confirmPassword, setConfirmPassword] = useState('r');
  const [error, setError] = useState('');

    console.log('Signing up user...');

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image source={require('../assets/images/loginn.png')} style={styles.logo} />
        <View style={styles.account}>
          <Text style={styles.title}>Log In</Text>
          <View style={styles.inputConLogIn}>
            <TextInput
              style={[styles.input, {color: 'black'}]}
              placeholder="Enter your username"
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

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity
              style={styles.customBotton}
              onPress={() => navigation.navigate('Task')}
              >
              <Text style={styles.textt}>Log In</Text>
            </TouchableOpacity>
            <View style={styles.signupContainer}>
              <Text style={styles.signText}>Don't have an account? </Text>

              <TouchableOpacity onPress={() => navigation.navigate('Task')}>
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
