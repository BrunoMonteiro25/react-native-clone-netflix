import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

export default function Episodio({ episodio }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.episodio}>
        <View>
          <Image style={styles.img} source={{ uri: episodio.capa }} />
        </View>
        <View>
          <Text style={styles.nomeEpisodio}>
            {episodio.numero}. {episodio.titulo}
          </Text>
          <Text style={styles.tempoEpisodio}>45 mins.</Text>
        </View>
      </View>
      <Text style={styles.descricao}>{episodio.descricao}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: '#22222264',
  },
  episodio: {
    flexDirection: 'row',
    marginHorizontal: 25,
    alignItems: 'center',
    marginBottom: 10,
  },
  img: {
    width: 180,
    height: 100,
    marginRight: 10,
  },
  nomeEpisodio: {
    color: '#fafafa',
    letterSpacing: 0.3,
    fontWeight: '500',
    fontSize: 15,
  },
  tempoEpisodio: {
    color: '#bbb',
    marginTop: 5,
  },
  descricao: {
    color: '#bbb',
    paddingHorizontal: 25,
    letterSpacing: 0.3,
  },
})
