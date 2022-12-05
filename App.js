import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Login from './src/pages/Login'
import Home from './src/pages/Home'
import Movie from './src/pages/Movie'
// import { Provider as PaperProvider } from 'react-native-paper'

export default function App() {
  return <Movie />
}

const styles = StyleSheet.create({
  text: {
    color: '#fafafa',
  },
})
