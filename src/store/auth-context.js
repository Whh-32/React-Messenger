import React, { useState } from 'react'

const AuthContext = React.createContext({
    token: '',
    user: '',
    isLogin: false,
    login: (token) => { },
    logout: () => { }
});

export const AuthContextProvider = (props) => {
    const initialData = localStorage.getItem('data');

    const [token, setToken] = useState(initialData ? JSON.parse(initialData).token : null);
    const [user, setUser] = useState(initialData ? JSON.parse(initialData).user : null);

    const userIsLogin = !!token;

    const login = (token, user) => {
        localStorage.setItem('data', JSON.stringify({token: token, user: user}));
        setToken(token);
        setUser(user);
    }

    const logout = () => {
        localStorage.removeItem('data');
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