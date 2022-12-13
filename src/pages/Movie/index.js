import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { StatusBar } from 'expo-status-bar'
import ButtonVertical from '../../components/ButtonVertical'
import Secao from '../../components/Secao'
import Episodio from '../../components/Episodio'
import { SinglePickerMaterialDialog } from 'react-native-material-dialog'
import api from '../../services/api'

export default function Movie({ route, navigation }) {
  const { filme, secao } = route.params

  const [visible, setVisible] = useState(false)
  const [temporada, setTemporada] = useState({
    value: filme?.temporadas[0]?._id,
    label: filme?.temporadas[0]?.titulo,
  })
  const [episodios, setEpisodios] = useState([])

  const getEpisodios = async (temporada_id) => {
    try {
      const response = await api.get(`/episodeo/temporada/${temporada_id}`)
      const res = response.data

      if (res.error) {
        alert(res.message)
        return false
      }

      setEpisodios(res.episodeos)
    } catch (err) {
      alert(err.message)
    }
  }

  useEffect(() => {
    if (filme.tipo === 'Series') {
      getEpisodios(temporada.value)
    }
  }, [])

  return (
    <View style={styles.container}>
      <SinglePickerMaterialDialog
        title={`${filme.titulo} - Temporadas`}
        items={filme?.temporadas.map((temporada) => ({
          value: temporada._id,
          label: temporada.titulo,
        }))}
        visible={visible}
        selectedItem={temporada}
        onCancel={() => setVisible(false)}
        onOk={(result) => {
          getEpisodios(result.selectedItem.value)
          setVisible(false)
          setTemporada(result.selectedItem)
        }}
      />

      <ScrollView>
        {/* <StatusBar style="light" /> */}
        <ImageBackground style={styles.hero} source={{ uri: filme.capa }}>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => {
              navigation.goBack()
            }}
          >
            <Icon
              style={{ position: 'absolute' }}
              name="arrow-left"
              color="#fff"
              size={25}
            />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.containerDetails}>
          <Text style={styles.title}>{filme.titulo}</Text>
          <TouchableOpacity style={styles.buttonPlay}>
            <Icon name="play" color="#111" size={20} />
            <Text style={styles.textPlay}>Assistir</Text>
          </TouchableOpacity>
          <Text style={styles.sinopse}>{filme.descricao}</Text>

          <Text style={styles.containerElenco}>
            <Text style={styles.elencoTitle}>Elenco: </Text>
            <Text style={styles.elencoAtores}>{filme.elenco.join(', ')}</Text>
          </Text>

          <Text style={styles.containerElenco}>
            <Text style={styles.elencoTitle}>Gêneros: </Text>
            <Text style={styles.elencoAtores}>{filme.generos.join(', ')}</Text>
          </Text>

          <Text style={styles.containerElenco}>
            <Text style={styles.elencoTitle}>Cenas momentos: </Text>
            <Text style={styles.elencoAtores}>
              {filme.cenas_momentos.join(', ')}
            </Text>
          </Text>
        </View>

        <View style={styles.menu}>
          <ButtonVertical name="plus" text="Minha Lista" />
          <ButtonVertical name="thumb-up" text="Classifique" />
          <ButtonVertical name="send" text="Compartilhe" />
          <ButtonVertical name="download" text="Baixar" />
        </View>

        {filme.tipo === 'filme' && (
          <View style={styles.semelhantes}>
            <Secao hasTopBorder secao={secao} children="Títulos Semelhantes" />
          </View>
        )}
        {filme.tipo === 'Series' && (
          <>
            <View style={styles.tempContainer}>
              <TouchableOpacity
                onPress={() => setVisible(true)}
                style={styles.tempButton}
              >
                <Text style={styles.tempName}>{temporada.label}</Text>
                <Icon name="chevron-down" color="#fff" size={20} />
              </TouchableOpacity>

              <FlatList
                data={episodios}
                style={{ width: '100%' }}
                renderItem={({ item, index }) => (
                  <Episodio episodio={item} key={index} />
                )}
              />
            </View>
          </>
        )}
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
  buttonBack: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.8)',
    width: 40,
    height: 40,
    marginTop: 20,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
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
  tempContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 35,
  },
  tempButton: {
    width: '87%',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.21)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 3,
  },
  tempName: {
    color: '#fafafa',
    fontWeight: '500',
    letterSpacing: 0.3,
    fontSize: 15,
  },
})
