import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

export default function Header() {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.header}
        colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']}
      >
        <View style={styles.headerSafeAreaView}>
          <Image
            style={styles.logo}
            source={require('../../../assets/logo-n.png')}
          />
          <TouchableOpacity>
            <Text style={styles.text}>Séries</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Filmes</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Minha Lista</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? 0 : '5%',
  },
  header: {
    width: '100%',
    position: 'absolute',
    zIndex: 999,
  },
  headerSafeAreaView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor: '#ba9cba',
    height: 70,
  },
  logo: {
    width: 40,
    height: 60,
  },
  text: {
    color: '#fff',
    fontWeight: '400',
    letterSpacing: 0.4,
    fontSize: 15,
  },
})
