import React, { useState } from 'react'

const AuthContext = React.createContext({
    token: '',
    isLogin: false,
    login: (token) => { },
    logout: () => { }
});

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken);
    const userIsLogin = !!token;

    const login = (token) => {
        localStorage.setItem('token', token);
        setToken(token);
    }

    const logout = () => {
        localStorage.removeItem('token')
        setToken(null);
    }

    const contexValue = {
        token: token,
        isLogin: userIsLogin,
        login: login,
        logout: logout
    }

    return (
        <AuthContext.Provider value={contexValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;