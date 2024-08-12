import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { useUser } from '../context/UserContext';
import { useNavigation } from '@react-navigation/native';
import imageHome from './../../assets/images/maiujuli.png'

export default function WelcomeScreen() {
  const { user } = useUser();
  const navigation = useNavigation();
  return (
    <View style={styles.welcomeScreen}>
      <Image source={imageHome} style={styles.image} />
      <Text style={styles.text}>Bienvenid@, {user.name}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4f9ff',
  },
  image: {
    width: 200, 
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
  },
});