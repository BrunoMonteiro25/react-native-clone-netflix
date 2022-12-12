import React, { useEffect, useState } from 'react'
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
  RefreshControl,
} from 'react-native'
import Secao from '../../components/Secao'

import api from '../../services/api'

export default function Home() {
  const [refreshing, setRefreshing] = useState(false)
  const [principal, setPrincipal] = useState({})
  const [secoes, setSecoes] = useState([])

  const getHome = async () => {
    try {
      setRefreshing(true)
      const response = await api.get('/home')
      const res = response.data

      if (res.error) {
        alert(res.message)
        setRefreshing(false)
        return false
      }

      setPrincipal(res.principal)
      setSecoes(res.secoes)
      setRefreshing(false)
    } catch (err) {
      setRefreshing(false)
      alert(err.message)
    }
  }

  useEffect(() => {
    getHome()
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getHome} />
        }
      >
        <StatusBar style="light" backgroundColor="#000" translucent={false} />
        <Header />
        <Hero filme={principal} />

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
          <Previews filmes={secoes[1]} />
        </View>

        {secoes.map((secao, index) => (
          <Secao secao={secao} key={index} />
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
