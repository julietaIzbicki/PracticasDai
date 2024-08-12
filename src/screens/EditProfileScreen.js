import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import { useUser } from '../context/UserContext';

export default function EditProfileScreen() {
  const { user, updateUser } = useUser();
  const navigation = useNavigation();

  return (
    <View style={styles.profileScreen}>
      <Text style={styles.text}>Edita tu perfil</Text>
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
        title="Listo!"
        onPress={() => navigation.navigate('ProfileScreen')}
        textColor="#0048b4"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  profileScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2e4ff',
  },
  text: {
    fontSize: 25,
    marginBottom: 20,
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
