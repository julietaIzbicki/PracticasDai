// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import DetailScreen from './src/screens/DetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import AboutAppScreen from './src/screens/AboutAppScreen';
import { UserProvider } from './src/context/UserContext';

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
      <StackA.Screen name="HomeScreen" component={HomeScreen} />
      <StackA.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </StackA.Navigator>
  );
}

function StackBNavigator() {
  return (
    <StackB.Navigator screenOptions={globalScreenOptions}>
      <StackB.Screen name="SearchScreen" component={SearchScreen} />
      <StackB.Screen name="DetailScreen" component={DetailScreen} />
    </StackB.Navigator>
  );
}

function StackCNavigator() {
  return (
    <StackC.Navigator screenOptions={globalScreenOptions}>
      <StackC.Screen name="ProfileScreen" component={ProfileScreen} />
      <StackC.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </StackC.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();
function SettingsStackNavigator() {
  return (
    <SettingsStack.Navigator screenOptions={globalScreenOptions}>
      <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} />
      <SettingsStack.Screen name="AboutApp" component={AboutAppScreen} />
    </SettingsStack.Navigator>
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
        name="Search" 
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
        component={SettingsStackNavigator}
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
      <UserProvider>
        <MyTabs />
      </UserProvider>
    </NavigationContainer>
  );
}