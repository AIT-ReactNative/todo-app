import { StyleSheet, Text, View } from 'react-native';
import Tasks from './components/tasks';

export default function App() {
  return (
    <View>
      <Tasks />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
