import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { StyleSheet} from 'react-native';

import Tasks from './components/tasks';
import Onboarding from './components/onboarding';
import SignUp from './components/signup';
import LogIn from './components/login';

const Stack = createNativeStackNavigator();
const GestureOnboarding = gestureHandlerRootHOC(Onboarding);
const GestureTasks = gestureHandlerRootHOC(Tasks);
const GestureSignup = gestureHandlerRootHOC(SignUp);
const GestureLogIn = gestureHandlerRootHOC(LogIn);


function App() {
  return (
  <GestureHandlerRootView style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Onboard'
      >
        <Stack.Screen name="Task" 
        component={GestureTasks} 
        options={{ headerShown: false}}
        />
        <Stack.Screen name="Onboard" options={{ headerShown: false}} component={GestureOnboarding} />
      
        <Stack.Screen name="SignUp" options={{ headerShown: false}} component={GestureSignup} />
      
        <Stack.Screen name="LogIn" options={{ headerShown: false}} component={GestureLogIn} />
      </Stack.Navigator>
    </NavigationContainer>
  </GestureHandlerRootView>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;