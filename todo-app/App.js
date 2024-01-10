import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Task from './component/task';
import OnBoarding from './component/onBoarding';


export default function App() {
  return (
    <SafeAreaView>
      <View>
     {/* <Task/>  */}
      <OnBoarding/>
      </View>
    
    </SafeAreaView>
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
