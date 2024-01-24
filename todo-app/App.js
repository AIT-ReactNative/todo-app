import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Task from './component/task';
import { GestureHandlerRootView, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import OnBoarding from './component/onBoarding';
import Signup from './component/signup';
import Login from './component/login'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Authstack from './Navigation/stack';

const Stack = createNativeStackNavigator();
const GestureOnboarding = gestureHandlerRootHOC(OnBoarding);

 function App() {
  return (
    <GestureHandlerRootView style={{flex:1}}>      
   <NavigationContainer>
   
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Onboarding" component={OnBoarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
 /*  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: '10px',
  }, */
});

export default App;