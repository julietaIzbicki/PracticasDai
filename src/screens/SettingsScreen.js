import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración General</Text>
      <Button
        title="Sobre la Aplicación"
        onPress={() => navigation.navigate('AboutApp')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe4f9',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});