import { View, Text, Button } from 'react-native'
import { colors, useTheme } from '../themeContext'

export default function HomeScreen({ navigation }) {
    const { theme } = useTheme();
    return (
        <View style={[styles.container(theme), { display: 'flex', alignItems: 'center', justifyContent: 'center' }]}>
            <Text style={styles.text(theme)}>Welcome !</Text>
            <Button title='Go to Profile' onPress={() => navigation.navigate('Profile')} />
        </View>
    )
}
const styles = {
    container: (theme) => ({
        backgroundColor: colors[theme].background,
        color: colors[theme].text,
    }),
    text: (theme) => ({
        color: colors[theme].text,
        fontSize: 24,
        fontWeight: 'bold'
    })
}

