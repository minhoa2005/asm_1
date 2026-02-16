
import React from 'react'
import { Switch, Text, View } from 'react-native'
import { colors, useTheme } from '../themeContext';

export default function SettingsScreen({ navigation }) {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <View style={styles.container(theme)}>
            <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                <Text style={[styles.text(theme), { fontSize: 16 }]}>Change Theme</Text>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Text style={[styles.text(theme), { fontSize: 16 }]}>Light</Text>
                    <Switch
                        thumbColor={theme === 'dark' ? '#fff' : '#fff'}
                        value={theme === 'dark'}
                        onValueChange={toggleTheme}
                    />
                    <Text style={[styles.text(theme), { fontSize: 16 }]}>Dark</Text>
                </View>
            </View>
        </View>
    )
}

const styles = {
    container: (theme) => ({
        color: colors[theme].text,
        backgroundColor: colors[theme].background,
        display: 'flex',
        flex: 1,
    }),
    text: (theme) => ({
        color: colors[theme].text,
    })
}
