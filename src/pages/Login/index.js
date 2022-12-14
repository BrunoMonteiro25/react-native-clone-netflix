import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { StatusBar } from 'expo-status-bar'

import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from 'react-native'

export default function Login({ navigation }) {
  // 0 - carregando, 1 - logado, 2 - deslogado
  const [logged, setLogged] = useState(0)

  const [credenciais, setCredenciais] = useState({
    email: '',
    senha: '',
  })

  const checkLogin = async () => {
    //AsyncStorage.clear()
    const user = await AsyncStorage.getItem('@user')
    if (user) {
      setLogged(1)
      navigation.replace('Home')
    } else {
      setLogged(2)
    }
  }

  const login = async () => {
    try {
      const response = await api.post('/usuario/login', credenciais)
      const res = response.data

      if (res.error) {
        alert(res.message)
        return false
      }

      await AsyncStorage.setItem('@user', JSON.stringify(res.usuario))
      navigation.replace('Home')
    } catch (err) {
      alert(err.message)
    }
  }

  useEffect(() => {
    checkLogin()
  }, [])

  return (
    <View style={styles.containerLogin}>
      <StatusBar style="light" />
      <View style={styles.logo}>
        <Image source={require('../../../assets/logo.png')} />
      </View>

      {logged === 0 && <ActivityIndicator color="#E50914" size="large" />}

      {logged === 2 && (
        <>
          <TextInput
            placeholder="Email ou número de telefone"
            autoCapitalize="none"
            textContentType="emailAddress"
            value={credenciais.email}
            style={styles.input}
            placeholderTextColor="#fafafa"
            onChangeText={(text) =>
              setCredenciais({ ...credenciais, email: text })
            }
          />
          <TextInput
            placeholder="Senha"
            value={credenciais.senha}
            secureTextEntry={true}
            style={styles.input}
            placeholderTextColor="#fafafa"
            onChangeText={(text) =>
              setCredenciais({ ...credenciais, senha: text })
            }
          />

          <TouchableOpacity style={styles.loginButton} onPress={() => login()}>
            <Text style={styles.loginText}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.recoverContainer}>
            <TouchableOpacity>
              <Text style={styles.recoverText}>Recuperar Senha</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.textSmall}>
            O acesso está protegido pelo Google reCAPTCHA para garantir que você
            não é um robo. Saiba mais.
          </Text>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? '20%' : '10%',
    marginBottom: Platform.OS === 'android' ? '13%' : '15%',
  },
  input: {
    width: '90%',
    marginBottom: 20,
    backgroundColor: '#3C3C3C',
    color: '#fafafa',
    height: 42,
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
  },
  loginButton: {
    width: '90%',
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E50914',
    borderRadius: 10,
    marginBottom: '5%',
  },
  loginText: {
    color: '#fafafa',
    fontSize: 17,
    letterSpacing: 0.3,
    fontWeight: '500',
  },
  recoverContainer: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 15,
  },
  recoverText: {
    color: '#fafafa',
  },
  textSmall: {
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    marginTop: 40,
  },
})
