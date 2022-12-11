import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native'

export default function Previews({ filmes }) {
  return (
    <FlatList
      style={styles.flatListContainer}
      horizontal
      data={filmes}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          key={index}
          style={{ marginLeft: index === 0 ? 35 : 0, marginRight: 20 }}
        >
          <View style={styles.oval}>
            <Image style={styles.capa} source={{ uri: item.capa }} />

            <Image
              resizeMode="contain"
              style={styles.logo}
              source={{ uri: item.logoMobile ? item.logoMobile : item.logo }}
            />

            <LinearGradient
              style={styles.gradient}
              colors={['rgba(0,0,0,0)', '#111']}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

const styles = StyleSheet.create({
  flatListContainer: {
    width: '100%',
    height: 90,
    marginTop: 10,
    marginBottom: 25,
  },
  oval: {
    backgroundColor: '#E50914',
    padding: 2.5,
    width: 90,
    height: 90,
    borderRadius: 90,
  },
  capa: {
    width: 85,
    height: 85,
    borderRadius: 85,
  },
  logo: {
    width: 90,
    height: 45,
    position: 'absolute',
    zIndex: 10,
    bottom: 10,
    alignSelf: 'center',
  },
  gradient: {
    width: '100%',
    height: 60,
    position: 'absolute',
    zIndex: 9,
    bottom: 0,
  },
})
