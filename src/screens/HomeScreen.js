import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import { useUser } from '../context/UserContext';
// import homeImage from '../assets/images/maiuJuli.png';         <Image source={homeImage} style={styles.image} />

export default function HomeScreen() {
  const { user, updateUser } = useUser();
  const navigation = useNavigation();

  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>Hola, bienvenido!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={user.name}
        onChangeText={(text) => updateUser({ name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        value={user.email}
        onChangeText={(text) => updateUser({ email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={user.password}
        onChangeText={(text) => updateUser({ password: text })}
      />
      <CustomButton
        title="Guardar y Continuar"
        onPress={() => navigation.navigate('WelcomeScreen')}
        backgroundColor="#93beff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4f9ff',
  },
  text: {
    color: 'black',
    fontSize: 25,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
    marginBottom: 25,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '90%',
    color: 'black',
  },
});
