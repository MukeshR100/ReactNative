import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Login from './screen/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screen/Home';
import Register from './screen/Register';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{
          headerRight: () => (
            <Button title='info' onPress={() => alert('Sorry')} />
          )
        }}
        />
        <Stack.Screen name='Home' component={Home}
        // options={({ navigation }) => ({
        //   headerRight: () => (
        //     <Button title="Update count" />
        //   )
        // })}
        />
        <Stack.Screen name='Register' component={Register}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'oldlace',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
