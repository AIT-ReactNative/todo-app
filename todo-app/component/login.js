import {SafeAreaView, View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import loginStyles from '../styles/loginStyles.js'

export default function Login({navigation}) {
  return (
    <SafeAreaView >
    <View style={loginStyles.container}>
      <Text>Login</Text>
      <Image source={require('../assets/login_pdn4.png')} style={Style.logo}/>
      <View style={loginStyles.body}>
        <View style={loginStyles.details}>
        <Text style={loginStyles.headingTitle}>Log In</Text>
        <View style={loginStyles.inputBox}>
        <TextInput style={loginStyles.inputText}>ww</TextInput>
        </View>
        <View style={loginStyles.inputBox2}>
        <TextInput style={loginStyles.inputText}>Me</TextInput>
        </View>
        </View>

        <View>
          <TouchableOpacity style={loginStyles.button}>
            <Text style={loginStyles.buttonText}>Log In</Text>
            </TouchableOpacity>
         </View>

        <View style={loginStyles.footer}>
        <Text style={loginStyles.skipText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")} >
            <Text style={loginStyles.buttonText2}>Sign up</Text>
            </TouchableOpacity>
            
        </View>

      </View>
    </View>
    </SafeAreaView>
  )
}