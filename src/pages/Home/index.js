import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ButtonVertical from '../../components/ButtonVertical'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native'

export default function Home() {
  return (
    <View>
      <Header />
      <Hero />

      <View style={styles.menuHeader}>
        <ButtonVertical name="plus" text="Minha Lista" />
        <TouchableOpacity style={styles.buttonPlay}>
          <Icon name="play" color="#111" size={20} />
          <Text style={styles.textPlay}>Assistir</Text>
        </TouchableOpacity>
        <ButtonVertical name="information-outline" text="Saiba Mais" />
      </View>

      <View style={styles.previews}>
        <Text style={styles.textPreviews}>Prévias</Text>
        <FlatList
          style={styles.flatListContainer}
          horizontal
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              style={{ marginLeft: index === 0 ? 35 : 0, marginRight: 10 }}
            >
              <View style={styles.oval}>
                <Image
                  style={styles.capa}
                  source={{ uri: 'https://i.imgur.com/HOOt0ZR.jpg' }}
                />

                <Image source={{ uri: 'https://i.imgur.com/yhjZgM3.png' }} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  menuHeader: {
    width: '100%',
    height: 38,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top: 470,
    // backgroundColor: '#e4a4e4',
  },
  buttonPlay: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    paddingHorizontal: 5,
    paddingRight: 10,
    borderRadius: 4,
  },
  textPlay: {
    color: '#111',
    letterSpacing: 0.2,
  },
  previews: {
    top: 520,
    width: '100%',
  },
  textPreviews: {
    color: '#fafafa',
    letterSpacing: 0.2,
    fontSize: 18,
    paddingLeft: 41,
    fontWeight: '500',
  },
  flatListContainer: {
    width: '100%',
    height: 100,
    marginTop: 10,
    marginBottom: 50,
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
})
