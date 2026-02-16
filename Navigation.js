import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { useTheme } from './themeContext';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import { Button, Text } from 'react-native';

export default function Navigation() {
    const Stack = createStackNavigator();
    const { theme } = useTheme();
    return (
        <NavigationContainer theme={theme === 'light' ? DefaultTheme : DarkTheme} >
            <Stack.Navigator initialRouteName='Home' screenOptions={({ navigation }) => ({
                headerRight: () =>
                    <Button title='Setting' onPress={() => navigation.navigate('Settings')} />

            })}>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Profile' component={ProfileScreen} />
                <Stack.Screen name='Edit Profile' component={EditProfileScreen} />
                <Stack.Screen name='Settings' component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
