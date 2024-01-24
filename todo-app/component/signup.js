import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from '../styles/loginStyles.js';
import loginStyles from '../styles/loginStyles.js';
import { NativeContainer } from '@react-navigation/native';
import { createNativeStackNavigation } from '@react-navigation/native-stack';


/* const Stack = createNativeStackNavigator(); */

const Signup = ({navigation}) => {
  return (
  
    <SafeAreaView >
    <View style={loginStyles.container}>
      <Text>Login</Text>
      <Image source={require('../assets/Sign_up_n6im.png')} style={Style.logo}/>
      <View style={loginStyles.body}>
        <View style={loginStyles.details}>
        <Text style={loginStyles.headingTitle}>Sign Up</Text>
        <View style={loginStyles.inputBox}>
        <TextInput style={loginStyles.inputText}>Create your username</TextInput>
        </View>
        <View style={loginStyles.inputBox2}>
        <TextInput style={loginStyles.inputText}>Enter your password</TextInput>
        </View>
        <View style={loginStyles.inputBox3}>
        <TextInput style={loginStyles.inputText}>Confirm your password</TextInput>
        </View>

        </View>

        <View>
          <TouchableOpacity style={loginStyles.button}>
            <Text style={loginStyles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
         </View>

        <View style={loginStyles.footer}>
        <Text style={loginStyles.skipText}>Do you already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")} >
          <Text style={loginStyles.buttonText2}>Log In</Text>
            </TouchableOpacity>
            
        </View>

      </View>
    </View>
    </SafeAreaView>
  )
}

export default Signup