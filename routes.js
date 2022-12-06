import React from 'react'
import Login from '../mobile/src/pages/Login'
import Home from '../mobile/src/pages/Home'
import Movie from '../mobile/src/pages/Movie'
import PaginaTeste from '../mobile/src/pages/PaginaTeste'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const Stack = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator()

export function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={'#000'}
      inactiveColor="#fff"
      barStyle={{ backgroundColor: '#141414' }}
      shifting={false}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="buscar"
        component={PaginaTeste}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({ color }) => (
            <Icon name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="em-breve"
        component={PaginaTeste}
        options={{
          tabBarLabel: 'Em Breve',
          tabBarIcon: ({ color }) => (
            <Icon name="play-speed" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="downloads"
        component={PaginaTeste}
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: ({ color }) => (
            <Icon name="download" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="mais"
        component={PaginaTeste}
        options={{
          tabBarLabel: 'Mais',
          tabBarIcon: ({ color }) => (
            <Icon name="menu" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeTabs}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Movie"
          component={Movie}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
