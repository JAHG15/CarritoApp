import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Data from '../screens/Data';
import Home from '../screens/Home';
import Maps from '../screens/Maps';
import Used from '../screens/Used';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <LinearGradient colors={['#140248', '#6f23e3']} style={styles.gradient}>
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false, // Oculta la barra superior
            tabBarStyle: {
              borderTopWidth: 0,
              elevation: 0,
            },
            tabBarBackground: () => (
              <LinearGradient
                colors={['#140248', '#6f23e3']}
                style={styles.tabBarBackground}
              />
            ),
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'white',
          }}
        >
          <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen 
            name="Used" 
            component={Used}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="construct" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen 
            name="Maps" 
            component={Maps}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="map" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen 
            name="Data" 
            component={Data}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="grid-outline" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  tabBarBackground: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 85,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default TabNavigator;
