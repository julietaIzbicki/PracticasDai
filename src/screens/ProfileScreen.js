import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../context/UserContext';

export default function ProfileScreen() {
  const { user } = useUser();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <Text style={styles.value}>{user.name}</Text>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>{user.email}</Text>
      <Text style={styles.label}>Contraseña:</Text>
      <Text style={styles.value}>{user.password}</Text>
      <Button
        title="Editar Perfil"
        onPress={() => navigation.navigate('EditProfileScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2e4ff',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    marginBottom: 20,
  },
});
