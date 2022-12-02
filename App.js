import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Login from './src/pages/Login'
import Home from './src/pages/Home'
// import { Provider as PaperProvider } from 'react-native-paper'

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="light" translucent={false} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  text: {
    color: '#fafafa',
  },
})
