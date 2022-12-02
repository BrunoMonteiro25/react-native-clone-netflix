import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'
import Hero from '../../components/Hero'

export default function Home() {
  return (
    <View>
      <Header />
      <Hero />
      {/* <Text style={styles.text}>Home</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#fafafa',
  },
})
