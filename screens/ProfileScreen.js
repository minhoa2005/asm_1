import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import { useUser } from '../userContext'
import { colors, useTheme } from '../themeContext';

export default function ProfileScreen({ navigation }) {
    const { user, setUser } = useUser();
    const { theme } = useTheme();
    return (
        <View style={styles.container(theme)}>
            <View>
                <Image source={{ uri: 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg' }} style={{ width: 150, height: 150, borderRadius: 75, marginBottom: 20 }} />
            </View>
            <View>
                <Text style={{ color: colors[theme].text }}>Name: {user?.name || 'Not given'}</Text>
                <Text style={{ color: colors[theme].text }}>Bio: {user?.bio || 'No bio available'}</Text>
            </View>
            <View style={{ marginTop: 20, width: '40%' }}>
                <Button title='Edit Profile' onPress={() => navigation.navigate('Edit Profile')} />
            </View>
        </View>
    )
}

const styles = {
    container: (theme) => ({
        backgroundColor: colors[theme].background,
        color: colors[theme].text,
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    })
}
