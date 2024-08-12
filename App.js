import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, FlatList, Switch, useColorScheme, Button } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import homeImage from './assets/images/maiuJuli.png';
import Slider from '@react-native-community/slider';

// Componentes personalizados
function CustomButton({ title, onPress, backgroundColor, textColor }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}>
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

// Pantallas
function ScreenA1() {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>Hola, bienvenido!</Text>
      <Image source={homeImage} style={styles.image} />
      <CustomButton
        title="Empezar a navegar"
        onPress={() => navigation.navigate('ScreenA2')}
        backgroundColor="#93beff"
      />
    </View>
  );
}

function ScreenA2() {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>Estás en la home</Text>
      <Button title="Volver" onPress={() => navigation.navigate('ScreenA1')} />
    </View>
  );
}

const data = [
  'Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grapes', 'Kiwi', 'Lemon', 'Mango', 
  'Nectarine', 'Olive', 'Papaya', 'Quince', 'Raspberry', 'Strawberry', 'Tomato', 
  'Uva', 'Vanilla', 'Watermelon', 'Xigua', 'Yam'
];

function ScreenB1() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const filteredData = data.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePress = (item) => {
    navigation.navigate('ScreenB2', { item });
  };

  return (
    <View style={styles.searchScreen}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.description}>Resultados:</Text>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.itemContainer} onPress={() => handlePress(item)}>
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

function ScreenB2({ route }) {
  const navigation = useNavigation();
  const { item } = route.params;

  return (
    <View style={styles.searchScreen}>
      <Text style={styles.itemText}>Detalles de: {item}</Text>
      <Button title="Volver" onPress={() => navigation.navigate('ScreenB1')} />
    </View>
  );
}

function ScreenC1() {
  const navigation = useNavigation();
  const route = useRoute();
  const { name, email, password } = route.params || {};

  return (
    <View style={styles.profileScreen}>
      <Text style={styles.text}>Perfil</Text>
      <Text style={styles.label}>Name: {name}</Text>
      <Text style={styles.label}>Email: {email}</Text>
      <Text style={styles.label}>Password: {password}</Text>
      <CustomButton
        title="Editar tu perfil"
        onPress={() => navigation.navigate('ScreenC2')}
        backgroundColor="#8096ff"
      />
    </View>
  );
}

function ScreenC2() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.profileScreen}>
      <Text style={styles.text}>Estás en el perfil</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton
        title="Listo!"
        onPress={() => navigation.navigate('ScreenC1', {
          name: name,
          email: email,
          password: password,
        })}
        textColor="#0048b4"
      />
    </View>
  );
}

function ScreenD1() {
  const navigation = useNavigation();
  return (
    <View style={styles.settingScreen}>
      <Text style={styles.text}>Configuración</Text>
      <Button
        title="Configurar mi página"
        onPress={() => navigation.navigate('ScreenD2')}
        color="#007BFF"
      />
    </View>
  );
}

function ScreenD2() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [soundEnabled, setSoundEnabled] = React.useState(true);
  const [soundVolume, setSoundVolume] = React.useState(0.5); // Valor inicial del slider (0.5 es 50%)
  const [vibrationEnabled, setVibrationEnabled] = React.useState(true);

  const toggleNotifications = () => setNotificationsEnabled(prev => !prev);
  const toggleSound = () => setSoundEnabled(prev => !prev);
  const toggleVibration = () => setVibrationEnabled(prev => !prev);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración General</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Notificaciones:</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Sonido:</Text>
        <Switch
          value={soundEnabled}
          onValueChange={toggleSound}
        />
      </View>

      {soundEnabled && (
        <View style={styles.section}>
          <Text style={styles.label}>Volumen:</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1}
            value={soundVolume}
            onValueChange={setSoundVolume}
            minimumTrackTintColor="#1EB1FC"
            maximumTrackTintColor="#000000"
            thumbTintColor="#1EB1FC"
          />
          <Text style={styles.volumeLabel}>{Math.round(soundVolume * 100)}%</Text>
        </View>
      )}

      <View style={styles.section}>
        <Text style={styles.label}>Vibración:</Text>
        <Switch
          value={vibrationEnabled}
          onValueChange={toggleVibration}
        />
      </View>
    </View>
  );
}

const globalScreenOptions = {
  headerShown: false,
};

const StackA = createNativeStackNavigator();
const StackB = createNativeStackNavigator();
const StackC = createNativeStackNavigator();
const StackD = createNativeStackNavigator();

function StackANavigator() {
  return (
    <StackA.Navigator screenOptions={globalScreenOptions}>
      <StackA.Screen name="ScreenA1" component={ScreenA1} />
      <StackA.Screen name="ScreenA2" component={ScreenA2} />
    </StackA.Navigator>
  );
}

function StackBNavigator() {
  return (
    <StackB.Navigator screenOptions={globalScreenOptions}>
      <StackB.Screen name="ScreenB1" component={ScreenB1} />
      <StackB.Screen name="ScreenB2" component={ScreenB2} />
    </StackB.Navigator>
  );
}

function StackCNavigator() {
  return (
    <StackC.Navigator screenOptions={globalScreenOptions}>
      <StackC.Screen name="ScreenC1" component={ScreenC1} />
      <StackC.Screen name="ScreenC2" component={ScreenC2} />
    </StackC.Navigator>
  );
}

function StackDNavigator() {
  return (
    <StackD.Navigator screenOptions={globalScreenOptions}>
      <StackD.Screen name="ScreenD1" component={ScreenD1} />
      <StackD.Screen name="ScreenD2" component={ScreenD2} />
    </StackD.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={StackANavigator} 
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Searching" 
        component={StackBNavigator} 
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={StackCNavigator} 
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={StackDNavigator} 
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginRight: 10,
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  homeScreen: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor:'#c0c4c8' 
  },
  text: {
    color: 'black',
    fontSize: 25,
  },
  description: {
    color: 'white',
    fontSize: 20,
  },
  searchScreen: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor:'#accbeb' 
  },
  profileScreen: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor:'#7dabda' 
  },
  settingScreen: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor:'#6698ca' 
  },
  button: {
    paddingVertical: 10, 
    paddingHorizontal: 25, 
    borderRadius: 20, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20, 
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    color: 'white',
    marginRight: 10, 
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '90%',
    color: 'white',
  },
  image: {
    width: 200, 
    height: 200,
    marginVertical: 10,
    marginBottom: 25, 
  },
  searchBarContainer: {
    width: '100%', 
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '100%',
  },
  listContainer: {
    flex: 1,
    marginTop: 15,
    justifyContent: 'flex-start', 
    width: '90%'
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    width: '100%', 
  },
  itemText: {
    fontSize: 16,
  },
});
