import React, { useState, useEffect } from 'react';
import firebase from './components/Config/Config';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        firebase.authChange(setCurrentUser);
    },[]);
    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
};