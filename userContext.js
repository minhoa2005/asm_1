import { createContext, useContext, useState } from "react";

const userProvider = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const value = { user, setUser };
    return (
        <userProvider.Provider value={value}>
            {children}
        </userProvider.Provider>
    );
}

const useUser = () => {
    const context = useContext(userProvider);
    if (!context) {
        return 'Context not found';
    }
    return context;
}

export { UserProvider, useUser };