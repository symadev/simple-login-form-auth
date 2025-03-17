import React, { createContext } from 'react';

export const AuthContext = createContext({ name: '' });

const ContextProvider = ({ children }) => {
    const authInfo = {
        name: 'My Homepage'
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;
