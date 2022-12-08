import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Crud from './Components/Crud';
import EditList from './Components/EditList';

export default function App() {
  return (
    <View style={styles.container}>
      <Crud/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
});
