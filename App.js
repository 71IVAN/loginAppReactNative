import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from './assets/styles/allStyles';
import Login_screen from './components/Login_screen';

export default function App() {
  return (
    <View style={styles.container}>
      <Login_screen /> 
    </View>
  );
}


