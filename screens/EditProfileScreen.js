import React, { useContext } from 'react'
import { View } from 'react-native'
import { colors, useTheme } from '../themeContext'

export default function EditProfileScreen({ navigation }) {
    const { theme } = useTheme();
    return (
        <View style={[styles.container(theme), { flex: 1, alignItems: 'center', justifyContent: 'center' }]}>

        </View>
    )
}

const styles = {
    container: (theme) => ({
        backgroundColor: colors[theme].background,
        color: colors[theme].text,
    })
}
