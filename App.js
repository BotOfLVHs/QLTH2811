//import { StatusBar } from 'expo-status-bar';
import {Alert, TouchableOpacity,
   StyleSheet, Text, View, SafeAreaView, Button, Image, StatusBar } from 'react-native';
import  RootComponent from './src/screens/index';
//import AppQLTH from './src/screens/QLTH/QLTH'
import Login from './src/screens/login/login'
import 'react-native-gesture-handler'

export default function App() {
  return (
        <RootComponent/>
  );
}
