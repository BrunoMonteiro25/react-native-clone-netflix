import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { StatusBar } from 'expo-status-bar'
import ButtonVertical from '../../components/ButtonVertical'
import Secao from '../../components/Secao'
import Episodio from '../../components/Episodio'
import { SinglePickerMaterialDialog } from 'react-native-material-dialog'

export default function Movie() {
  const [type] = useState('serie')
  const [visible, setVisible] = useState(false)
  const [temporada, setTemporada] = useState({ value: 1, label: 'Temporada 1' })

  return (
    <View style={styles.container}>
      <SinglePickerMaterialDialog
        title={'Série - Temporadas'}
        items={[
          { value: 1, label: 'Temporada 1' },
          { value: 2, label: 'Temporada 2' },
          { value: 3, label: 'Temporada 3' },
        ]}
        visible={visible}
        selectedItem={temporada}
        onCancel={() => setVisible(false)}
        onOk={(result) => {
          setVisible(false)
          setTemporada(result.selectedItem)
        }}
      />

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

        {type === 'filme' && (
          <View style={styles.semelhantes}>
            <Secao hasTopBorder children="Títulos Semelhantes" />
          </View>
        )}
        {type === 'serie' && (
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
                data={[1, 2, 3]}
                style={{ width: '100%' }}
                renderItem={({ item, index }) => <Episodio key={index} />}
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
