import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [user, setUser] = useState({})


    return (
        <AuthContext.Provider value={{
            user, setUser
           }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContextProvider;