import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Login from './src/pages/Login'
import Home from './src/pages/Home'
// import { Provider as PaperProvider } from 'react-native-paper'

export default function App() {
  return <Home />
}

const styles = StyleSheet.create({
  text: {
    color: '#fafafa',
  },
})
