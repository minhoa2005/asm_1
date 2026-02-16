import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import { ThemeProvider, useTheme } from './themeContext';
import { UserProvider } from './userContext';
import Navigation from './Navigation';

export default function App() {

  return (
    <ThemeProvider>
      <UserProvider>
        <Navigation />
      </UserProvider>
    </ThemeProvider>
  );
}


