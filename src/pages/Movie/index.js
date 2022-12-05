import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { StatusBar } from 'expo-status-bar'
import ButtonVertical from '../../components/ButtonVertical'
import Secao from '../../components/Secao'

export default function Movie() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar style="light" />
        <ImageBackground
          style={styles.hero}
          source={{ uri: 'https://i.imgur.com/iDm1pXK.png' }}
        />
        <View style={styles.containerDetails}>
          <Text style={styles.title}>Gotham</Text>
          <TouchableOpacity style={styles.buttonPlay}>
            <Icon name="play" color="#111" size={20} />
            <Text style={styles.textPlay}>Assistir</Text>
          </TouchableOpacity>
          <Text style={styles.sinopse}>
            Antes de Batman, a cidade de Gotham já existia. James Gordon (Ben
            McKenzie) é um detetive iniciante polícia. Corajoso, sincero e
            ansioso para mostrar serviço.
          </Text>

          <Text style={styles.containerElenco}>
            <Text style={styles.elencoTitle}>Elenco: </Text>
            <Text style={styles.elencoAtores}>
              Ben MacKenzie, Donal Logue, Jada Pinkett Smith
            </Text>
          </Text>

          <Text style={styles.containerElenco}>
            <Text style={styles.elencoTitle}>Gêneros: </Text>
            <Text style={styles.elencoAtores}>
              Séries dramáticas sobre crimes, Séries baseadas em HQ, Séries
              dramáticas
            </Text>
          </Text>

          <Text style={styles.containerElenco}>
            <Text style={styles.elencoTitle}>Cenas momentos: </Text>
            <Text style={styles.elencoAtores}>Vigoroso, Empolgantes</Text>
          </Text>
        </View>

        <View style={styles.menu}>
          <ButtonVertical name="plus" text="Minha Lista" />
          <ButtonVertical name="thumb-up" text="Classifique" />
          <ButtonVertical name="send" text="Compartilhe" />
          <ButtonVertical name="download" text="Baixar" />
        </View>

        <View style={styles.semelhantes}>
          <Secao hasTopBorder children="Títulos Semelhantes" />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  hero: {
    height: 275,
  },
  containerDetails: {
    width: '100%',
    padding: 25,
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },
  buttonPlay: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    paddingVertical: 10,
    paddingRight: 10,
    borderRadius: 4,
    width: '100%',
  },
  textPlay: {
    color: '#000',
    letterSpacing: 0.2,
    fontWeight: '500',
  },
  sinopse: {
    color: '#fafafa',
    marginVertical: 20,
    lineHeight: 18,
  },
  containerElenco: {
    width: '100%',
    marginBottom: 7,
  },
  elencoTitle: {
    color: '#bbb',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18,
  },
  elencoAtores: {
    color: '#fafafa',
    lineHeight: 18,
  },
  menu: {
    height: 38,
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  semelhantes: {
    marginHorizontal: -15,
    marginVertical: 50,
  },
})
