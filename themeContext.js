import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    const value = { theme, setTheme };
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        return 'Context not found';
    }
    return context
}

export const colors = {
    light: {
        background: '#ffffff',
        text: '#333333',
        primary: '#007bff',
    },
    dark: {
        background: '#121212',
        text: '#ffffff',
        primary: '#1e90ff',
    }
};

export { ThemeProvider, useTheme };