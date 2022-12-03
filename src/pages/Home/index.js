import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ButtonVertical from '../../components/ButtonVertical'
import { StatusBar } from 'expo-status-bar'
import Previews from '../../components/Previews'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import Secao from '../../components/Secao'

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar style="light" translucent={false} />
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
          <Previews />
        </View>

        {[1, 2, 3, 4].map((secao, index) => (
          <Secao key={index} />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  menuHeader: {
    height: 38,
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-evenly',
    marginTop: 15,
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
    width: '100%',
    marginTop: 35,
  },
  textPreviews: {
    color: '#fafafa',
    letterSpacing: 0.2,
    fontSize: 18,
    paddingLeft: 41,
    fontWeight: '500',
  },
})
