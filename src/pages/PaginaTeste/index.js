import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PaginaTeste() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página Teste</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 0.3,
  },
})
