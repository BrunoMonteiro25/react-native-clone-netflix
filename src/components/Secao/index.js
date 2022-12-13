import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Secao({ hasTopBorder, secao }) {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      {hasTopBorder && <View style={styles.borderTop} />}
      <Text style={styles.text}>{secao[0]?.generos[0]}</Text>

      <FlatList
        style={styles.flatListContainer}
        horizontal
        data={secao}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('Movie', { filme: item, secao })}
          >
            <ImageBackground
              style={[
                styles.capa,
                { marginRight: 20, marginLeft: index === 0 ? 41 : 0 },
              ]}
              source={{ uri: item.capa }}
            >
              <View style={styles.logoContainer}>
                <Image
                  style={styles.logo}
                  resizeMode="contain"
                  source={{
                    uri: item.logoMobile ? item.logoMobile : item.logo,
                  }}
                />
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: '100%',
  },
  text: {
    color: '#fafafa',
    letterSpacing: 0.2,
    fontSize: 18,
    paddingLeft: 41,
    fontWeight: '500',
  },
  flatListContainer: {
    width: '100%',
    height: 180,
    marginVertical: 10,
  },
  capa: {
    width: 120,
    height: 180,
    borderRadius: 4,
    overflow: 'hidden',
  },
  logoContainer: {
    width: 100,
    height: 45,
    position: 'absolute',
    zIndex: 10,
    bottom: 20,
    alignSelf: 'center',
  },
  logo: {
    width: 100,
    height: 45,
    //marginHorizontal: 25,
  },
  borderTop: {
    backgroundColor: '#E50914',
    height: 3,
    width: 100,
    left: 41,
    marginBottom: 10,
  },
})
