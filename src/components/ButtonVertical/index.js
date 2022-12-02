import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function ButtonVertical({ name, text }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Icon name={name} color="#fafafa" size={20} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fafafa',
    letterSpacing: 0.2,
  },
})
