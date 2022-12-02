import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'

export default function Hero() {
  return (
    <ImageBackground
      style={styles.hero}
      source={{ uri: 'https://i.imgur.com/HOOt0ZR.jpg' }}
    >
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={{ uri: 'https://i.imgur.com/yhjZgM3.png' }}
      />

      <View style={styles.containerTop10}>
        <Image
          style={styles.top10Image}
          resizeMode="contain"
          source={require('../../../assets/top10.png')}
        />
        <Text style={styles.top10Text}>Top 1 de hoje no Brasil</Text>
      </View>

      <LinearGradient
        style={styles.gradient}
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  hero: {
    height: 500,
    width: '100%',
    position: 'absolute',
  },
  logo: {
    marginTop: 275,
    alignSelf: 'center',
    width: 300,
    height: 150,
    zIndex: 10,
    // backgroundColor: '#d17dd1',
  },
  containerTop10: {
    flexDirection: 'row',
    // backgroundColor: '#d17dd1',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    zIndex: 10,
  },
  top10Image: {
    width: 40,
    height: 40,
  },
  top10Text: {
    marginLeft: 15,
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
  gradient: {
    width: '100%',
    height: 210,
    position: 'absolute',
    zIndex: 9,
    // backgroundColor: '#d17dd1',
    bottom: 0,
  },
})
