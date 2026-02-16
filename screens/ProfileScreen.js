import React from 'react'
import { View } from 'react-native'
import { useUser } from '../userContext'
import { useTheme } from '../themeContext';

export default function ProfileScreen({ navigation }) {
    const { user, setUser } = useUser();
    const { theme } = useTheme();
    return (
        <View style={styles.container(theme)}>
            <Text style={{ color: colors[theme].text }}>Profile Screen</Text>
        </View>
    )
}

const styles = {
    container: (theme) => ({
        backgroundColor: colors[theme].background,
        color: colors[theme].text,
    })
}
