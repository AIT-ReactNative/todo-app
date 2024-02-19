import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { StyleSheet} from 'react-native';

import Tasks from './components/tasks';
import Onboarding from './components/onboarding';

const Stack = createNativeStackNavigator();

const GestureOnboarding = gestureHandlerRootHOC(Onboarding);
const GestureTasks = gestureHandlerRootHOC(Tasks);

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