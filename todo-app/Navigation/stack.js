import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Signup from '../component/signup';
import Login from '../component/login';
import Onboarding from '../component/onBoarding';

const Stack = createNativeStackNavigator();

const Authstack = () => {
  return (
   
    <Stack.Navigator>
      <Stack.Screen name="onBoarding" component={Onboarding} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>

  )
}

export default Authstack