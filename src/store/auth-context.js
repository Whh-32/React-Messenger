import React, { useState } from 'react'

const AuthContext = React.createContext({
    token: '',
    user: '',
    isLogin: false,
    login: (token) => { },
    logout: () => { }
});

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const initialUser = localStorage.getItem('user');

    const [token, setToken] = useState(initialToken);
    const [user, setUser] = useState(initialUser)
    const userIsLogin = !!token;


    const login = (token, user) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', user);
        setToken(token);
        setUser(user)
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
    }

    const contexValue = {
        token: token,
        user: user,
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